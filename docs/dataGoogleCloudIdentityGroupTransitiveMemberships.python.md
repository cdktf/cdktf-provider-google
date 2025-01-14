# `dataGoogleCloudIdentityGroupTransitiveMemberships` Submodule <a name="`dataGoogleCloudIdentityGroupTransitiveMemberships` Submodule" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityGroupTransitiveMemberships <a name="DataGoogleCloudIdentityGroupTransitiveMemberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_identity_group_transitive_memberships google_cloud_identity_group_transitive_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.group">group</a></code> | <code>str</code> | The name of the Group to get memberships from. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_identity_group_transitive_memberships#id DataGoogleCloudIdentityGroupTransitiveMemberships#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.group"></a>

- *Type:* str

The name of the Group to get memberships from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_identity_group_transitive_memberships#group DataGoogleCloudIdentityGroupTransitiveMemberships#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_identity_group_transitive_memberships#id DataGoogleCloudIdentityGroupTransitiveMemberships#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleCloudIdentityGroupTransitiveMemberships resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleCloudIdentityGroupTransitiveMemberships resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleCloudIdentityGroupTransitiveMemberships to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleCloudIdentityGroupTransitiveMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_identity_group_transitive_memberships#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityGroupTransitiveMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.memberships">memberships</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `memberships`<sup>Required</sup> <a name="memberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.memberships"></a>

```python
memberships: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList</a>

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityGroupTransitiveMembershipsConfig <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsConfig" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.group">group</a></code> | <code>str</code> | The name of the Group to get memberships from. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_identity_group_transitive_memberships#id DataGoogleCloudIdentityGroupTransitiveMemberships#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The name of the Group to get memberships from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_identity_group_transitive_memberships#group DataGoogleCloudIdentityGroupTransitiveMemberships#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_identity_group_transitive_memberships#id DataGoogleCloudIdentityGroupTransitiveMemberships#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships()
```


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey()
```


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.preferredMemberKey">preferred_member_key</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.relationType">relation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships">DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `preferred_member_key`<sup>Required</sup> <a name="preferred_member_key" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.preferredMemberKey"></a>

```python
preferred_member_key: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList</a>

---

##### `relation_type`<sup>Required</sup> <a name="relation_type" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.relationType"></a>

```python
relation_type: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.roles"></a>

```python
roles: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships">DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships</a>

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey</a>

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_transitive_memberships

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles</a>

---



