# `dataGoogleArtifactRegistryDockerImages` Submodule <a name="`dataGoogleArtifactRegistryDockerImages` Submodule" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryDockerImages <a name="DataGoogleArtifactRegistryDockerImages" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images google_artifact_registry_docker_images}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_images

dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  repository_id: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#location DataGoogleArtifactRegistryDockerImages#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#repository_id DataGoogleArtifactRegistryDockerImages#repository_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#id DataGoogleArtifactRegistryDockerImages#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#project DataGoogleArtifactRegistryDockerImages#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#location DataGoogleArtifactRegistryDockerImages#location}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#repository_id DataGoogleArtifactRegistryDockerImages#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#id DataGoogleArtifactRegistryDockerImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#project DataGoogleArtifactRegistryDockerImages#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_images

dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_images

dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_images

dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_images

dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleArtifactRegistryDockerImages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleArtifactRegistryDockerImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryDockerImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.dockerImages">docker_images</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList">DataGoogleArtifactRegistryDockerImagesDockerImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `docker_images`<sup>Required</sup> <a name="docker_images" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.dockerImages"></a>

```python
docker_images: DataGoogleArtifactRegistryDockerImagesDockerImagesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList">DataGoogleArtifactRegistryDockerImagesDockerImagesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryDockerImagesConfig <a name="DataGoogleArtifactRegistryDockerImagesConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_images

dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  repository_id: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#location DataGoogleArtifactRegistryDockerImages#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#repository_id DataGoogleArtifactRegistryDockerImages#repository_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#id DataGoogleArtifactRegistryDockerImages#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#project DataGoogleArtifactRegistryDockerImages#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#location DataGoogleArtifactRegistryDockerImages#location}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#repository_id DataGoogleArtifactRegistryDockerImages#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#id DataGoogleArtifactRegistryDockerImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/artifact_registry_docker_images#project DataGoogleArtifactRegistryDockerImages#project}.

---

### DataGoogleArtifactRegistryDockerImagesDockerImages <a name="DataGoogleArtifactRegistryDockerImagesDockerImages" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImages.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_images

dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImages()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryDockerImagesDockerImagesList <a name="DataGoogleArtifactRegistryDockerImagesDockerImagesList" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_images

dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference <a name="DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_docker_images

dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.buildTime">build_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.imageSizeBytes">image_size_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.mediaType">media_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.uploadTime">upload_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImages">DataGoogleArtifactRegistryDockerImagesDockerImages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `build_time`<sup>Required</sup> <a name="build_time" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.buildTime"></a>

```python
build_time: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `image_size_bytes`<sup>Required</sup> <a name="image_size_bytes" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.imageSizeBytes"></a>

```python
image_size_bytes: str
```

- *Type:* str

---

##### `media_type`<sup>Required</sup> <a name="media_type" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.mediaType"></a>

```python
media_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `upload_time`<sup>Required</sup> <a name="upload_time" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.uploadTime"></a>

```python
upload_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleArtifactRegistryDockerImagesDockerImages
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImages">DataGoogleArtifactRegistryDockerImagesDockerImages</a>

---



