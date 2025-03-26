# `dataGoogleSecretManagerRegionalSecretVersionAccess` Submodule <a name="`dataGoogleSecretManagerRegionalSecretVersionAccess` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerRegionalSecretVersionAccess <a name="DataGoogleSecretManagerRegionalSecretVersionAccess" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access google_secret_manager_regional_secret_version_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secret_version_access

dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  secret: str,
  id: str = None,
  is_secret_data_base64: typing.Union[bool, IResolvable] = None,
  location: str = None,
  project: str = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#secret DataGoogleSecretManagerRegionalSecretVersionAccess#secret}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#id DataGoogleSecretManagerRegionalSecretVersionAccess#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.isSecretDataBase64">is_secret_data_base64</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#is_secret_data_base64 DataGoogleSecretManagerRegionalSecretVersionAccess#is_secret_data_base64}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#location DataGoogleSecretManagerRegionalSecretVersionAccess#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#project DataGoogleSecretManagerRegionalSecretVersionAccess#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#version DataGoogleSecretManagerRegionalSecretVersionAccess#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.secret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#secret DataGoogleSecretManagerRegionalSecretVersionAccess#secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#id DataGoogleSecretManagerRegionalSecretVersionAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_secret_data_base64`<sup>Optional</sup> <a name="is_secret_data_base64" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.isSecretDataBase64"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#is_secret_data_base64 DataGoogleSecretManagerRegionalSecretVersionAccess#is_secret_data_base64}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#location DataGoogleSecretManagerRegionalSecretVersionAccess#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#project DataGoogleSecretManagerRegionalSecretVersionAccess#project}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#version DataGoogleSecretManagerRegionalSecretVersionAccess#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetIsSecretDataBase64">reset_is_secret_data_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_secret_data_base64` <a name="reset_is_secret_data_base64" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetIsSecretDataBase64"></a>

```python
def reset_is_secret_data_base64() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecretVersionAccess resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secret_version_access

dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secret_version_access

dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secret_version_access

dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secret_version_access

dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecretVersionAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleSecretManagerRegionalSecretVersionAccess to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleSecretManagerRegionalSecretVersionAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerRegionalSecretVersionAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.secretData">secret_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.isSecretDataBase64Input">is_secret_data_base64_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.isSecretDataBase64">is_secret_data_base64</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secret_data`<sup>Required</sup> <a name="secret_data" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.secretData"></a>

```python
secret_data: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_secret_data_base64_input`<sup>Optional</sup> <a name="is_secret_data_base64_input" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.isSecretDataBase64Input"></a>

```python
is_secret_data_base64_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_secret_data_base64`<sup>Required</sup> <a name="is_secret_data_base64" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.isSecretDataBase64"></a>

```python
is_secret_data_base64: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerRegionalSecretVersionAccessConfig <a name="DataGoogleSecretManagerRegionalSecretVersionAccessConfig" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secret_version_access

dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  secret: str,
  id: str = None,
  is_secret_data_base64: typing.Union[bool, IResolvable] = None,
  location: str = None,
  project: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#secret DataGoogleSecretManagerRegionalSecretVersionAccess#secret}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#id DataGoogleSecretManagerRegionalSecretVersionAccess#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.isSecretDataBase64">is_secret_data_base64</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#is_secret_data_base64 DataGoogleSecretManagerRegionalSecretVersionAccess#is_secret_data_base64}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#location DataGoogleSecretManagerRegionalSecretVersionAccess#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#project DataGoogleSecretManagerRegionalSecretVersionAccess#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#version DataGoogleSecretManagerRegionalSecretVersionAccess#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.secret"></a>

```python
secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#secret DataGoogleSecretManagerRegionalSecretVersionAccess#secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#id DataGoogleSecretManagerRegionalSecretVersionAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_secret_data_base64`<sup>Optional</sup> <a name="is_secret_data_base64" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.isSecretDataBase64"></a>

```python
is_secret_data_base64: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#is_secret_data_base64 DataGoogleSecretManagerRegionalSecretVersionAccess#is_secret_data_base64}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#location DataGoogleSecretManagerRegionalSecretVersionAccess#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#project DataGoogleSecretManagerRegionalSecretVersionAccess#project}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/secret_manager_regional_secret_version_access#version DataGoogleSecretManagerRegionalSecretVersionAccess#version}.

---



