# `dataGoogleArtifactRegistryDockerImage` Submodule <a name="`dataGoogleArtifactRegistryDockerImage` Submodule" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryDockerImage <a name="DataGoogleArtifactRegistryDockerImage" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image google_artifact_registry_docker_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_image

dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image_name: str,
  location: str,
  repository_id: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.imageName">image_name</a></code> | <code>str</code> | The image name to fetch. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.location">location</a></code> | <code>str</code> | The region of the artifact registry repository. For example, "us-west1". |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | The last part of the repository name to fetch from. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image#id DataGoogleArtifactRegistryDockerImage#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.project">project</a></code> | <code>str</code> | Project ID of the project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.imageName"></a>

- *Type:* str

The image name to fetch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image#image_name DataGoogleArtifactRegistryDockerImage#image_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.location"></a>

- *Type:* str

The region of the artifact registry repository. For example, "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image#location DataGoogleArtifactRegistryDockerImage#location}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.repositoryId"></a>

- *Type:* str

The last part of the repository name to fetch from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image#repository_id DataGoogleArtifactRegistryDockerImage#repository_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image#id DataGoogleArtifactRegistryDockerImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.project"></a>

- *Type:* str

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image#project DataGoogleArtifactRegistryDockerImage#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_image

dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_image

dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_image

dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_image

dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleArtifactRegistryDockerImage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleArtifactRegistryDockerImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryDockerImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.buildTime">build_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageSizeBytes">image_size_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.mediaType">media_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.uploadTime">upload_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `build_time`<sup>Required</sup> <a name="build_time" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.buildTime"></a>

```python
build_time: str
```

- *Type:* str

---

##### `image_size_bytes`<sup>Required</sup> <a name="image_size_bytes" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageSizeBytes"></a>

```python
image_size_bytes: str
```

- *Type:* str

---

##### `media_type`<sup>Required</sup> <a name="media_type" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.mediaType"></a>

```python
media_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `upload_time`<sup>Required</sup> <a name="upload_time" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.uploadTime"></a>

```python
upload_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryDockerImageConfig <a name="DataGoogleArtifactRegistryDockerImageConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_image

dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image_name: str,
  location: str,
  repository_id: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.imageName">image_name</a></code> | <code>str</code> | The image name to fetch. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.location">location</a></code> | <code>str</code> | The region of the artifact registry repository. For example, "us-west1". |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | The last part of the repository name to fetch from. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image#id DataGoogleArtifactRegistryDockerImage#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.project">project</a></code> | <code>str</code> | Project ID of the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

The image name to fetch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image#image_name DataGoogleArtifactRegistryDockerImage#image_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The region of the artifact registry repository. For example, "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image#location DataGoogleArtifactRegistryDockerImage#location}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

The last part of the repository name to fetch from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image#repository_id DataGoogleArtifactRegistryDockerImage#repository_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image#id DataGoogleArtifactRegistryDockerImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/artifact_registry_docker_image#project DataGoogleArtifactRegistryDockerImage#project}

---



