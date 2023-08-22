# `data_google_service_account_id_token`

Refer to the Terraform Registory for docs: [`data_google_service_account_id_token`](https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token).

# `dataGoogleServiceAccountIdToken` Submodule <a name="`dataGoogleServiceAccountIdToken` Submodule" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceAccountIdToken <a name="DataGoogleServiceAccountIdToken" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token google_service_account_id_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_service_account_id_token

dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  target_audience: str,
  delegates: typing.List[str] = None,
  id: str = None,
  include_email: typing.Union[bool, IResolvable] = None,
  target_service_account: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.targetAudience">target_audience</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#target_audience DataGoogleServiceAccountIdToken#target_audience}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.delegates">delegates</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#delegates DataGoogleServiceAccountIdToken#delegates}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#id DataGoogleServiceAccountIdToken#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.includeEmail">include_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#include_email DataGoogleServiceAccountIdToken#include_email}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.targetServiceAccount">target_service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#target_service_account DataGoogleServiceAccountIdToken#target_service_account}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_audience`<sup>Required</sup> <a name="target_audience" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.targetAudience"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#target_audience DataGoogleServiceAccountIdToken#target_audience}.

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.delegates"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#delegates DataGoogleServiceAccountIdToken#delegates}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#id DataGoogleServiceAccountIdToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_email`<sup>Optional</sup> <a name="include_email" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.includeEmail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#include_email DataGoogleServiceAccountIdToken#include_email}.

---

##### `target_service_account`<sup>Optional</sup> <a name="target_service_account" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.targetServiceAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#target_service_account DataGoogleServiceAccountIdToken#target_service_account}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetDelegates">reset_delegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetIncludeEmail">reset_include_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetTargetServiceAccount">reset_target_service_account</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_delegates` <a name="reset_delegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetDelegates"></a>

```python
def reset_delegates() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_email` <a name="reset_include_email" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetIncludeEmail"></a>

```python
def reset_include_email() -> None
```

##### `reset_target_service_account` <a name="reset_target_service_account" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetTargetServiceAccount"></a>

```python
def reset_target_service_account() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_service_account_id_token

dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_service_account_id_token

dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_service_account_id_token

dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idToken">id_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegatesInput">delegates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmailInput">include_email_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudienceInput">target_audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccountInput">target_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegates">delegates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmail">include_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudience">target_audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccount">target_service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id_token`<sup>Required</sup> <a name="id_token" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idToken"></a>

```python
id_token: str
```

- *Type:* str

---

##### `delegates_input`<sup>Optional</sup> <a name="delegates_input" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegatesInput"></a>

```python
delegates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_email_input`<sup>Optional</sup> <a name="include_email_input" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmailInput"></a>

```python
include_email_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_audience_input`<sup>Optional</sup> <a name="target_audience_input" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudienceInput"></a>

```python
target_audience_input: str
```

- *Type:* str

---

##### `target_service_account_input`<sup>Optional</sup> <a name="target_service_account_input" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccountInput"></a>

```python
target_service_account_input: str
```

- *Type:* str

---

##### `delegates`<sup>Required</sup> <a name="delegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegates"></a>

```python
delegates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_email`<sup>Required</sup> <a name="include_email" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmail"></a>

```python
include_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_audience`<sup>Required</sup> <a name="target_audience" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudience"></a>

```python
target_audience: str
```

- *Type:* str

---

##### `target_service_account`<sup>Required</sup> <a name="target_service_account" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccount"></a>

```python
target_service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceAccountIdTokenConfig <a name="DataGoogleServiceAccountIdTokenConfig" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_service_account_id_token

dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  target_audience: str,
  delegates: typing.List[str] = None,
  id: str = None,
  include_email: typing.Union[bool, IResolvable] = None,
  target_service_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetAudience">target_audience</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#target_audience DataGoogleServiceAccountIdToken#target_audience}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.delegates">delegates</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#delegates DataGoogleServiceAccountIdToken#delegates}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#id DataGoogleServiceAccountIdToken#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.includeEmail">include_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#include_email DataGoogleServiceAccountIdToken#include_email}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetServiceAccount">target_service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#target_service_account DataGoogleServiceAccountIdToken#target_service_account}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_audience`<sup>Required</sup> <a name="target_audience" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetAudience"></a>

```python
target_audience: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#target_audience DataGoogleServiceAccountIdToken#target_audience}.

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.delegates"></a>

```python
delegates: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#delegates DataGoogleServiceAccountIdToken#delegates}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#id DataGoogleServiceAccountIdToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_email`<sup>Optional</sup> <a name="include_email" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.includeEmail"></a>

```python
include_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#include_email DataGoogleServiceAccountIdToken#include_email}.

---

##### `target_service_account`<sup>Optional</sup> <a name="target_service_account" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetServiceAccount"></a>

```python
target_service_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/service_account_id_token#target_service_account DataGoogleServiceAccountIdToken#target_service_account}.

---



