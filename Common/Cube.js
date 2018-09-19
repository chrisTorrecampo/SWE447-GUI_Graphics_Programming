
function Cube( vertexShaderId, fragmentShaderId ) {

    // Initialize the shader pipeline for this object using either shader ids
    //   declared in the application's HTML header, or use the default names.
    //
    var vertShdr = vertexShaderId || "Cube-vertex-shader";
    var fragShdr = fragmentShaderId || "Cube-fragment-shader";

    this.program = initShaders(gl, vertShdr, fragShdr);

    if ( this.program < 0 ) {
        alert( "Error: Cube shader pipeline failed to compile.\n\n" +
            "\tvertex shader id:  \t" + vertShdr + "\n" +
            "\tfragment shader id:\t" + fragShdr + "\n" );
        return; 
    }

    this.positions = { 
        values : new Float32Array([
            //Face 1
            0.0, 0.0, 0.0   //Vertex 00
            1.0, 0.0, 0.0   //Vertex 01
            1.0, 1.0, 0.0   //Vertex 02
            0.0, 1.0, 0.0   //Vertex 03
            
            //Face 2
            0.0, 1.0, 0.0   //Vertex 04
            1.0, 1.0, 0.0   //Vertex 05
            1.0, 1.0, 1.0   //Vertex 06
            0.0, 1.0, 1.0   //Vertex 07
            
            //Face 3
            0.0, 0.0, 1.0   //Vertex 08
            1.0, 0.0, 1.0   //Vertex 09
            1.0, 1.0, 1.0   //Vertex 10
            0.0, 1.0, 1.0   //Vertex 11
            
            //Face 4
            0.0, 0.0, 0.0   //Vertex 12
            1.0, 0.0, 0.0   //Vertex 13
            1.0, 0.0, 1.0   //Vertex 14
            0.0, 0.0, 1.0   //Vertex 15
            
            //Face 5
            1.0, 0.0, 0.0   //Vertex 16
            1.0, 0.0, 1.0   //Vertex 17
            1.0, 1.0, 1.0   //Vertex 18
            1.0, 1.0, 0.0   //Vertex 19
            
            //Face 6
            0.0, 0.0, 1.0   //Vertex 20
            0.0, 0.0, 0.0   //Vertex 21
            0.0, 1.0, 0.0   //Vertex 22
            0.0, 1.0, 1.0   //Vertex 23
        ]),
        numComponents : 3
    };
    
    this.indices = { 
        values : new Uint16Array([
            0, 1, 3, 2,     //Face 1
            4, 5, 7, 6,     //Face 2
            8, 9, 11, 10,   //Face 3
            12, 13, 15, 14, //Face 4
            16, 17, 19, 18, //Face 5
            20, 21, 23, 22  //Face 6
        ])
    };
    this.indices.count = this.indices.values.length;

    
    this.positions.buffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, this.positions.buffer );
    gl.bufferData( gl.ARRAY_BUFFER, this.positions.values, gl.STATIC_DRAW );

    this.indices.buffer = gl.createBuffer();
    gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, this.indices.buffer );
    gl.bufferData( gl.ELEMENT_ARRAY_BUFFER, this.indices.values, gl.STATIC_DRAW );

    this.positions.attributeLoc = gl.getAttribLocation( this.program, "vPosition" );
    gl.enableVertexAttribArray( this.positions.attributeLoc );

    MVLoc = gl.getUniformLocation( this.program, "MV" );

    this.MV = undefined;

    this.render = function () {
        gl.useProgram( this.program );

        gl.bindBuffer( gl.ARRAY_BUFFER, this.positions.buffer );
        gl.vertexAttribPointer( this.positions.attributeLoc, this.positions.numComponents,
            gl.FLOAT, gl.FALSE, 0, 0 );
 
        gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, this.indices.buffer );

        gl.uniformMatrix4fv( MVLoc, gl.FALSE, flatten(this.MV) );

        // Draw the cube's base
        gl.drawElements( gl.TRIANGLES, this.indices.count, gl.UNSIGNED_SHORT, 0 );
    }
};
