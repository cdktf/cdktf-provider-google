# `dataGoogleCertificateManagerCertificates` Submodule <a name="`dataGoogleCertificateManagerCertificates` Submodule" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCertificateManagerCertificates <a name="DataGoogleCertificateManagerCertificates" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates google_certificate_manager_certificates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates#filter DataGoogleCertificateManagerCertificates#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates#id DataGoogleCertificateManagerCertificates#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates#region DataGoogleCertificateManagerCertificates#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates#filter DataGoogleCertificateManagerCertificates#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates#id DataGoogleCertificateManagerCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates#region DataGoogleCertificateManagerCertificates#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleCertificateManagerCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleCertificateManagerCertificates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleCertificateManagerCertificates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleCertificateManagerCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCertificateManagerCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList">DataGoogleCertificateManagerCertificatesCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.certificates"></a>

```python
certificates: DataGoogleCertificateManagerCertificatesCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList">DataGoogleCertificateManagerCertificatesCertificatesList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCertificateManagerCertificatesCertificates <a name="DataGoogleCertificateManagerCertificatesCertificates" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates()
```


### DataGoogleCertificateManagerCertificatesCertificatesManaged <a name="DataGoogleCertificateManagerCertificatesCertificatesManaged" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged()
```


### DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo()
```


### DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue()
```


### DataGoogleCertificateManagerCertificatesConfig <a name="DataGoogleCertificateManagerCertificatesConfig" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates#filter DataGoogleCertificateManagerCertificates#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates#id DataGoogleCertificateManagerCertificates#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates#region DataGoogleCertificateManagerCertificates#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates#filter DataGoogleCertificateManagerCertificates#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates#id DataGoogleCertificateManagerCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/certificate_manager_certificates#region DataGoogleCertificateManagerCertificates#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCertificateManagerCertificatesCertificatesList <a name="DataGoogleCertificateManagerCertificatesCertificatesList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCertificateManagerCertificatesCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo">DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo">DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo</a>

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedList <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.authorizationAttemptInfo">authorization_attempt_info</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList">DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.dnsAuthorizations">dns_authorizations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.issuanceConfig">issuance_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.provisioningIssue">provisioning_issue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList">DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged">DataGoogleCertificateManagerCertificatesCertificatesManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_attempt_info`<sup>Required</sup> <a name="authorization_attempt_info" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.authorizationAttemptInfo"></a>

```python
authorization_attempt_info: DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList">DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList</a>

---

##### `dns_authorizations`<sup>Required</sup> <a name="dns_authorizations" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.dnsAuthorizations"></a>

```python
dns_authorizations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuance_config`<sup>Required</sup> <a name="issuance_config" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.issuanceConfig"></a>

```python
issuance_config: str
```

- *Type:* str

---

##### `provisioning_issue`<sup>Required</sup> <a name="provisioning_issue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.provisioningIssue"></a>

```python
provisioning_issue: DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList">DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCertificateManagerCertificatesCertificatesManaged
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged">DataGoogleCertificateManagerCertificatesCertificatesManaged</a>

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue">DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue">DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue</a>

---


### DataGoogleCertificateManagerCertificatesCertificatesOutputReference <a name="DataGoogleCertificateManagerCertificatesCertificatesOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificates

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.managed">managed</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList">DataGoogleCertificateManagerCertificatesCertificatesManagedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.sanDnsnames">san_dnsnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates">DataGoogleCertificateManagerCertificatesCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.managed"></a>

```python
managed: DataGoogleCertificateManagerCertificatesCertificatesManagedList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList">DataGoogleCertificateManagerCertificatesCertificatesManagedList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `san_dnsnames`<sup>Required</sup> <a name="san_dnsnames" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.sanDnsnames"></a>

```python
san_dnsnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCertificateManagerCertificatesCertificates
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates">DataGoogleCertificateManagerCertificatesCertificates</a>

---



