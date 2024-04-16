# `dataGoogleCertificateManagerCertificateMap` Submodule <a name="`dataGoogleCertificateManagerCertificateMap` Submodule" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCertificateManagerCertificateMap <a name="DataGoogleCertificateManagerCertificateMap" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/certificate_manager_certificate_map google_certificate_manager_certificate_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificate_map

dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap(
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
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-defined name of the Certificate Map. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/certificate_manager_certificate_map#id DataGoogleCertificateManagerCertificateMap#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/certificate_manager_certificate_map#project DataGoogleCertificateManagerCertificateMap#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.name"></a>

- *Type:* str

A user-defined name of the Certificate Map.

Certificate Map names must be unique
globally and match the pattern 'projects/* /locations/* /certificateMaps/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/certificate_manager_certificate_map#name DataGoogleCertificateManagerCertificateMap#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/certificate_manager_certificate_map#id DataGoogleCertificateManagerCertificateMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/certificate_manager_certificate_map#project DataGoogleCertificateManagerCertificateMap#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleCertificateManagerCertificateMap resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificate_map

dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificate_map

dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificate_map

dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificate_map

dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleCertificateManagerCertificateMap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleCertificateManagerCertificateMap to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleCertificateManagerCertificateMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/certificate_manager_certificate_map#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCertificateManagerCertificateMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.gclbTargets">gclb_targets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList">DataGoogleCertificateManagerCertificateMapGclbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gclb_targets`<sup>Required</sup> <a name="gclb_targets" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.gclbTargets"></a>

```python
gclb_targets: DataGoogleCertificateManagerCertificateMapGclbTargetsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList">DataGoogleCertificateManagerCertificateMapGclbTargetsList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCertificateManagerCertificateMapConfig <a name="DataGoogleCertificateManagerCertificateMapConfig" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificate_map

dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.name">name</a></code> | <code>str</code> | A user-defined name of the Certificate Map. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/certificate_manager_certificate_map#id DataGoogleCertificateManagerCertificateMap#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/certificate_manager_certificate_map#project DataGoogleCertificateManagerCertificateMap#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-defined name of the Certificate Map.

Certificate Map names must be unique
globally and match the pattern 'projects/* /locations/* /certificateMaps/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/certificate_manager_certificate_map#name DataGoogleCertificateManagerCertificateMap#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/certificate_manager_certificate_map#id DataGoogleCertificateManagerCertificateMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/certificate_manager_certificate_map#project DataGoogleCertificateManagerCertificateMap#project}.

---

### DataGoogleCertificateManagerCertificateMapGclbTargets <a name="DataGoogleCertificateManagerCertificateMapGclbTargets" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificate_map

dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargets()
```


### DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs <a name="DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificate_map

dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList <a name="DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificate_map

dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference <a name="DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificate_map

dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs">DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs">DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs</a>

---


### DataGoogleCertificateManagerCertificateMapGclbTargetsList <a name="DataGoogleCertificateManagerCertificateMapGclbTargetsList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificate_map

dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference <a name="DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_certificate_manager_certificate_map

dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.ipConfigs">ip_configs</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList">DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetHttpsProxy">target_https_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetSslProxy">target_ssl_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargets">DataGoogleCertificateManagerCertificateMapGclbTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_configs`<sup>Required</sup> <a name="ip_configs" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.ipConfigs"></a>

```python
ip_configs: DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList">DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList</a>

---

##### `target_https_proxy`<sup>Required</sup> <a name="target_https_proxy" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetHttpsProxy"></a>

```python
target_https_proxy: str
```

- *Type:* str

---

##### `target_ssl_proxy`<sup>Required</sup> <a name="target_ssl_proxy" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetSslProxy"></a>

```python
target_ssl_proxy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCertificateManagerCertificateMapGclbTargets
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargets">DataGoogleCertificateManagerCertificateMapGclbTargets</a>

---



