import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-topic',
    templateUrl: './topic.component.html',
    styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
    }

    example1 = "//strings example\nconst name = 'ram';\nconst name1 = \"hari\";\nconst result = \`The names are ${name} and ${name1}\`;"

    example2 = "const number1 = 3/0;\n" +
        "console.log(number1); // Infinity\n" +
        "\n" +
        "const number2 = -3/0;\n" +
        "console.log(number2); // -Infinity\n" +
        "\n" +
        "// strings can't be divided by numbers\n" +
        "const number3 = \"abc\"/3; \n" +
        "console.log(number3);  // NaN"
}
