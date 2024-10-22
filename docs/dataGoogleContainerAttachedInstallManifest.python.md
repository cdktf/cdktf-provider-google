# `dataGoogleContainerAttachedInstallManifest` Submodule <a name="`dataGoogleContainerAttachedInstallManifest` Submodule" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleContainerAttachedInstallManifest <a name="DataGoogleContainerAttachedInstallManifest" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest google_container_attached_install_manifest}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_container_attached_install_manifest

dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  location: str,
  platform_version: str,
  project: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#cluster_id DataGoogleContainerAttachedInstallManifest#cluster_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#location DataGoogleContainerAttachedInstallManifest#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.platformVersion">platform_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#platform_version DataGoogleContainerAttachedInstallManifest#platform_version}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#project DataGoogleContainerAttachedInstallManifest#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#id DataGoogleContainerAttachedInstallManifest#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#cluster_id DataGoogleContainerAttachedInstallManifest#cluster_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#location DataGoogleContainerAttachedInstallManifest#location}.

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.platformVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#platform_version DataGoogleContainerAttachedInstallManifest#platform_version}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#project DataGoogleContainerAttachedInstallManifest#project}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#id DataGoogleContainerAttachedInstallManifest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleContainerAttachedInstallManifest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_container_attached_install_manifest

dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_container_attached_install_manifest

dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_container_attached_install_manifest

dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_container_attached_install_manifest

dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleContainerAttachedInstallManifest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleContainerAttachedInstallManifest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleContainerAttachedInstallManifest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleContainerAttachedInstallManifest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.manifest">manifest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.platformVersionInput">platform_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.manifest"></a>

```python
manifest: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `platform_version_input`<sup>Optional</sup> <a name="platform_version_input" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.platformVersionInput"></a>

```python
platform_version_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleContainerAttachedInstallManifestConfig <a name="DataGoogleContainerAttachedInstallManifestConfig" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_container_attached_install_manifest

dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  location: str,
  platform_version: str,
  project: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#cluster_id DataGoogleContainerAttachedInstallManifest#cluster_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#location DataGoogleContainerAttachedInstallManifest#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.platformVersion">platform_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#platform_version DataGoogleContainerAttachedInstallManifest#platform_version}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#project DataGoogleContainerAttachedInstallManifest#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#id DataGoogleContainerAttachedInstallManifest#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#cluster_id DataGoogleContainerAttachedInstallManifest#cluster_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#location DataGoogleContainerAttachedInstallManifest#location}.

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#platform_version DataGoogleContainerAttachedInstallManifest#platform_version}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#project DataGoogleContainerAttachedInstallManifest#project}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/container_attached_install_manifest#id DataGoogleContainerAttachedInstallManifest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



