# `dataGoogleCloudIdentityGroupLookup` Submodule <a name="`dataGoogleCloudIdentityGroupLookup` Submodule" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityGroupLookup <a name="DataGoogleCloudIdentityGroupLookup" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/cloud_identity_group_lookup google_cloud_identity_group_lookup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_lookup

dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_key: DataGoogleCloudIdentityGroupLookupGroupKey,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.groupKey">group_key</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | group_key block. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_key`<sup>Required</sup> <a name="group_key" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.groupKey"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

group_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/cloud_identity_group_lookup#group_key DataGoogleCloudIdentityGroupLookup#group_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey">put_group_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_group_key` <a name="put_group_key" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey"></a>

```python
def put_group_key(
  id: str,
  namespace: str = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey.parameter.id"></a>

- *Type:* str

The ID of the entity.

For Google-managed entities, the id should be the email address of an existing group or user.
For external-identity-mapped entities, the id must be a string conforming to the Identity Source's requirements.
Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey.parameter.namespace"></a>

- *Type:* str

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity such as a Google user or a Google Group.
If specified, the EntityKey represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of identitysources/{identity_source}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/cloud_identity_group_lookup#namespace DataGoogleCloudIdentityGroupLookup#namespace}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleCloudIdentityGroupLookup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_lookup

dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_lookup

dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_lookup

dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_lookup

dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleCloudIdentityGroupLookup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleCloudIdentityGroupLookup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleCloudIdentityGroupLookup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/cloud_identity_group_lookup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityGroupLookup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKey">group_key</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference">DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKeyInput">group_key_input</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `group_key`<sup>Required</sup> <a name="group_key" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKey"></a>

```python
group_key: DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference">DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `group_key_input`<sup>Optional</sup> <a name="group_key_input" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKeyInput"></a>

```python
group_key_input: DataGoogleCloudIdentityGroupLookupGroupKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityGroupLookupConfig <a name="DataGoogleCloudIdentityGroupLookupConfig" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_lookup

dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_key: DataGoogleCloudIdentityGroupLookupGroupKey,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.groupKey">group_key</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | group_key block. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_key`<sup>Required</sup> <a name="group_key" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.groupKey"></a>

```python
group_key: DataGoogleCloudIdentityGroupLookupGroupKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

group_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/cloud_identity_group_lookup#group_key DataGoogleCloudIdentityGroupLookup#group_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityGroupLookupGroupKey <a name="DataGoogleCloudIdentityGroupLookupGroupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_lookup

dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey(
  id: str,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.id">id</a></code> | <code>str</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.namespace">namespace</a></code> | <code>str</code> | The namespace in which the entity exists. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the entity.

For Google-managed entities, the id should be the email address of an existing group or user.
For external-identity-mapped entities, the id must be a string conforming to the Identity Source's requirements.
Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity such as a Google user or a Google Group.
If specified, the EntityKey represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of identitysources/{identity_source}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/cloud_identity_group_lookup#namespace DataGoogleCloudIdentityGroupLookup#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference <a name="DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_group_lookup

dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudIdentityGroupLookupGroupKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---



