# `dataGoogleComputeNetworkAttachment` Submodule <a name="`dataGoogleComputeNetworkAttachment` Submodule" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeNetworkAttachment <a name="DataGoogleComputeNetworkAttachment" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_network_attachment google_compute_network_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_attachment

dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.region">region</a></code> | <code>str</code> | URL of the region where the network attachment resides. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_network_attachment#project DataGoogleComputeNetworkAttachment#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_network_attachment#name DataGoogleComputeNetworkAttachment#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.region"></a>

- *Type:* str

URL of the region where the network attachment resides.

This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_network_attachment#region DataGoogleComputeNetworkAttachment#region}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_network_attachment#project DataGoogleComputeNetworkAttachment#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleComputeNetworkAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_attachment

dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_attachment

dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_attachment

dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_attachment

dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleComputeNetworkAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeNetworkAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeNetworkAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_network_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeNetworkAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.connectionEndpoints">connection_endpoints</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList">DataGoogleComputeNetworkAttachmentConnectionEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.connectionPreference">connection_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.producerAcceptLists">producer_accept_lists</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.producerRejectLists">producer_reject_lists</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.selfLinkWithId">self_link_with_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.subnetworks">subnetworks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `connection_endpoints`<sup>Required</sup> <a name="connection_endpoints" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.connectionEndpoints"></a>

```python
connection_endpoints: DataGoogleComputeNetworkAttachmentConnectionEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList">DataGoogleComputeNetworkAttachmentConnectionEndpointsList</a>

---

##### `connection_preference`<sup>Required</sup> <a name="connection_preference" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.connectionPreference"></a>

```python
connection_preference: str
```

- *Type:* str

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `producer_accept_lists`<sup>Required</sup> <a name="producer_accept_lists" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.producerAcceptLists"></a>

```python
producer_accept_lists: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `producer_reject_lists`<sup>Required</sup> <a name="producer_reject_lists" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.producerRejectLists"></a>

```python
producer_reject_lists: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `self_link_with_id`<sup>Required</sup> <a name="self_link_with_id" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.selfLinkWithId"></a>

```python
self_link_with_id: str
```

- *Type:* str

---

##### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.subnetworks"></a>

```python
subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeNetworkAttachmentConfig <a name="DataGoogleComputeNetworkAttachmentConfig" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_attachment

dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.region">region</a></code> | <code>str</code> | URL of the region where the network attachment resides. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_network_attachment#project DataGoogleComputeNetworkAttachment#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_network_attachment#name DataGoogleComputeNetworkAttachment#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.region"></a>

```python
region: str
```

- *Type:* str

URL of the region where the network attachment resides.

This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_network_attachment#region DataGoogleComputeNetworkAttachment#region}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_network_attachment#project DataGoogleComputeNetworkAttachment#project}.

---

### DataGoogleComputeNetworkAttachmentConnectionEndpoints <a name="DataGoogleComputeNetworkAttachmentConnectionEndpoints" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_attachment

dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpoints()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeNetworkAttachmentConnectionEndpointsList <a name="DataGoogleComputeNetworkAttachmentConnectionEndpointsList" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_attachment

dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference <a name="DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_attachment

dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.projectIdOrNum">project_id_or_num</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.secondaryIpCidrRanges">secondary_ip_cidr_ranges</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpoints">DataGoogleComputeNetworkAttachmentConnectionEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `project_id_or_num`<sup>Required</sup> <a name="project_id_or_num" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.projectIdOrNum"></a>

```python
project_id_or_num: str
```

- *Type:* str

---

##### `secondary_ip_cidr_ranges`<sup>Required</sup> <a name="secondary_ip_cidr_ranges" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.secondaryIpCidrRanges"></a>

```python
secondary_ip_cidr_ranges: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeNetworkAttachmentConnectionEndpoints
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeNetworkAttachment.DataGoogleComputeNetworkAttachmentConnectionEndpoints">DataGoogleComputeNetworkAttachmentConnectionEndpoints</a>

---



