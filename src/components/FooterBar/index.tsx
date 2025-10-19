import { Footer, Bar, Link, Text } from "./styles";

const FooterBar = () => {
    return (
        <Footer>
            <Bar />
            <Link href="https://www.linkedin.com/in/joaosouza-dev/" target="_blank">linkedin</Link>
            <Link href="https://github.com/Dev-JoaoSouza/" target="_blank">github</Link>
            <Text>João Dev 2025</Text>
        </Footer>
    )
}

export { FooterBar }