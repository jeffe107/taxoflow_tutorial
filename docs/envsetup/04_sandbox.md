If you exceed the Codespace resources, we have prepared a solution using [CodeSandbox](https://codesandbox.io/). These are the steps to follow:

1. Go to the website: [CodeSandbox](https://codesandbox.io/).
2. Sign in using your GitHub or your Google Account (top right corner).
3. Once signed-in, click on `+ Create` (top right corner).
4. Select `Docker CodeSanbox`.
5. On the `Configure window` leave everything as default and click on Create Devbox.
6. Wait until the microVM is created.
7. Now it looks like VS code. Create a new terminal then.
8. Run the following commands on the terminal:

```bash
curl -s https://get.sdkman.io | bash
source "/root/.sdkman/bin/sdkman-init.sh"
sdk install java 17.0.10-tem
curl -s https://get.nextflow.io | bash
chmod +x nextflow
export PATH=${PATH}:/project/workspace
git clone https://github.com/jeffe107/taxoflow_tutorial
cd taxoflow_tutorial
export NXF_VER=25.10.4
```

9. Now you should be into the repository folder, just like on GitHub Codespaces.