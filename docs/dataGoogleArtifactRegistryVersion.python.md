# `dataGoogleArtifactRegistryVersion` Submodule <a name="`dataGoogleArtifactRegistryVersion` Submodule" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryVersion <a name="DataGoogleArtifactRegistryVersion" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version google_artifact_registry_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_version

dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion(
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
  package_name: str,
  repository_id: str,
  version_name: str,
  id: str = None,
  project: str = None,
  view: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#location DataGoogleArtifactRegistryVersion#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.packageName">package_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#package_name DataGoogleArtifactRegistryVersion#package_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#repository_id DataGoogleArtifactRegistryVersion#repository_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.versionName">version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#version_name DataGoogleArtifactRegistryVersion#version_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#id DataGoogleArtifactRegistryVersion#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#project DataGoogleArtifactRegistryVersion#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#view DataGoogleArtifactRegistryVersion#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#location DataGoogleArtifactRegistryVersion#location}.

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.packageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#package_name DataGoogleArtifactRegistryVersion#package_name}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#repository_id DataGoogleArtifactRegistryVersion#repository_id}.

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.versionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#version_name DataGoogleArtifactRegistryVersion#version_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#id DataGoogleArtifactRegistryVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#project DataGoogleArtifactRegistryVersion#project}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.view"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#view DataGoogleArtifactRegistryVersion#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetView">reset_view</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetView"></a>

```python
def reset_view() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_version

dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_version

dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_version

dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_version

dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleArtifactRegistryVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleArtifactRegistryVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.annotations">annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.relatedTags">related_tags</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList">DataGoogleArtifactRegistryVersionRelatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.packageNameInput">package_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.versionNameInput">version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.viewInput">view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.packageName">package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.view">view</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.annotations"></a>

```python
annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `related_tags`<sup>Required</sup> <a name="related_tags" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.relatedTags"></a>

```python
related_tags: DataGoogleArtifactRegistryVersionRelatedTagsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList">DataGoogleArtifactRegistryVersionRelatedTagsList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `package_name_input`<sup>Optional</sup> <a name="package_name_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.packageNameInput"></a>

```python
package_name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `version_name_input`<sup>Optional</sup> <a name="version_name_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.versionNameInput"></a>

```python
version_name_input: str
```

- *Type:* str

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.viewInput"></a>

```python
view_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.view"></a>

```python
view: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryVersionConfig <a name="DataGoogleArtifactRegistryVersionConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_version

dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  package_name: str,
  repository_id: str,
  version_name: str,
  id: str = None,
  project: str = None,
  view: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#location DataGoogleArtifactRegistryVersion#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.packageName">package_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#package_name DataGoogleArtifactRegistryVersion#package_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#repository_id DataGoogleArtifactRegistryVersion#repository_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.versionName">version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#version_name DataGoogleArtifactRegistryVersion#version_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#id DataGoogleArtifactRegistryVersion#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#project DataGoogleArtifactRegistryVersion#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#view DataGoogleArtifactRegistryVersion#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#location DataGoogleArtifactRegistryVersion#location}.

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#package_name DataGoogleArtifactRegistryVersion#package_name}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#repository_id DataGoogleArtifactRegistryVersion#repository_id}.

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#version_name DataGoogleArtifactRegistryVersion#version_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#id DataGoogleArtifactRegistryVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#project DataGoogleArtifactRegistryVersion#project}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.view"></a>

```python
view: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/artifact_registry_version#view DataGoogleArtifactRegistryVersion#view}.

---

### DataGoogleArtifactRegistryVersionRelatedTags <a name="DataGoogleArtifactRegistryVersionRelatedTags" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_version

dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryVersionRelatedTagsList <a name="DataGoogleArtifactRegistryVersionRelatedTagsList" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_version

dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleArtifactRegistryVersionRelatedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleArtifactRegistryVersionRelatedTagsOutputReference <a name="DataGoogleArtifactRegistryVersionRelatedTagsOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_artifact_registry_version

dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags">DataGoogleArtifactRegistryVersionRelatedTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleArtifactRegistryVersionRelatedTags
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags">DataGoogleArtifactRegistryVersionRelatedTags</a>

---



