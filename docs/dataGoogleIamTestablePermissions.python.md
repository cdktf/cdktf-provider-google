# `dataGoogleIamTestablePermissions` Submodule <a name="`dataGoogleIamTestablePermissions` Submodule" id="@cdktf/provider-google.dataGoogleIamTestablePermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamTestablePermissions <a name="DataGoogleIamTestablePermissions" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions google_iam_testable_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_testable_permissions

dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  full_resource_name: str,
  custom_support_level: str = None,
  id: str = None,
  stages: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.fullResourceName">full_resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#full_resource_name DataGoogleIamTestablePermissions#full_resource_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.customSupportLevel">custom_support_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#custom_support_level DataGoogleIamTestablePermissions#custom_support_level}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#id DataGoogleIamTestablePermissions#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.stages">stages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#stages DataGoogleIamTestablePermissions#stages}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `full_resource_name`<sup>Required</sup> <a name="full_resource_name" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.fullResourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#full_resource_name DataGoogleIamTestablePermissions#full_resource_name}.

---

##### `custom_support_level`<sup>Optional</sup> <a name="custom_support_level" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.customSupportLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#custom_support_level DataGoogleIamTestablePermissions#custom_support_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#id DataGoogleIamTestablePermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.stages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#stages DataGoogleIamTestablePermissions#stages}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetCustomSupportLevel">reset_custom_support_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetStages">reset_stages</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_custom_support_level` <a name="reset_custom_support_level" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetCustomSupportLevel"></a>

```python
def reset_custom_support_level() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_stages` <a name="reset_stages" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetStages"></a>

```python
def reset_stages() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleIamTestablePermissions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_testable_permissions

dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_testable_permissions

dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_testable_permissions

dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_testable_permissions

dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleIamTestablePermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleIamTestablePermissions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleIamTestablePermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleIamTestablePermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList">DataGoogleIamTestablePermissionsPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.customSupportLevelInput">custom_support_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fullResourceNameInput">full_resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.stagesInput">stages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.customSupportLevel">custom_support_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fullResourceName">full_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.stages">stages</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.permissions"></a>

```python
permissions: DataGoogleIamTestablePermissionsPermissionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList">DataGoogleIamTestablePermissionsPermissionsList</a>

---

##### `custom_support_level_input`<sup>Optional</sup> <a name="custom_support_level_input" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.customSupportLevelInput"></a>

```python
custom_support_level_input: str
```

- *Type:* str

---

##### `full_resource_name_input`<sup>Optional</sup> <a name="full_resource_name_input" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fullResourceNameInput"></a>

```python
full_resource_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `stages_input`<sup>Optional</sup> <a name="stages_input" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.stagesInput"></a>

```python
stages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_support_level`<sup>Required</sup> <a name="custom_support_level" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.customSupportLevel"></a>

```python
custom_support_level: str
```

- *Type:* str

---

##### `full_resource_name`<sup>Required</sup> <a name="full_resource_name" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fullResourceName"></a>

```python
full_resource_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.stages"></a>

```python
stages: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamTestablePermissionsConfig <a name="DataGoogleIamTestablePermissionsConfig" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_testable_permissions

dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  full_resource_name: str,
  custom_support_level: str = None,
  id: str = None,
  stages: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.fullResourceName">full_resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#full_resource_name DataGoogleIamTestablePermissions#full_resource_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.customSupportLevel">custom_support_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#custom_support_level DataGoogleIamTestablePermissions#custom_support_level}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#id DataGoogleIamTestablePermissions#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.stages">stages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#stages DataGoogleIamTestablePermissions#stages}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `full_resource_name`<sup>Required</sup> <a name="full_resource_name" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.fullResourceName"></a>

```python
full_resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#full_resource_name DataGoogleIamTestablePermissions#full_resource_name}.

---

##### `custom_support_level`<sup>Optional</sup> <a name="custom_support_level" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.customSupportLevel"></a>

```python
custom_support_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#custom_support_level DataGoogleIamTestablePermissions#custom_support_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#id DataGoogleIamTestablePermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.stages"></a>

```python
stages: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_testable_permissions#stages DataGoogleIamTestablePermissions#stages}.

---

### DataGoogleIamTestablePermissionsPermissions <a name="DataGoogleIamTestablePermissionsPermissions" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_testable_permissions

dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamTestablePermissionsPermissionsList <a name="DataGoogleIamTestablePermissionsPermissionsList" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_testable_permissions

dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleIamTestablePermissionsPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleIamTestablePermissionsPermissionsOutputReference <a name="DataGoogleIamTestablePermissionsPermissionsOutputReference" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_testable_permissions

dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.apiDisabled">api_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.customSupportLevel">custom_support_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions">DataGoogleIamTestablePermissionsPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_disabled`<sup>Required</sup> <a name="api_disabled" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.apiDisabled"></a>

```python
api_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `custom_support_level`<sup>Required</sup> <a name="custom_support_level" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.customSupportLevel"></a>

```python
custom_support_level: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleIamTestablePermissionsPermissions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions">DataGoogleIamTestablePermissionsPermissions</a>

---



