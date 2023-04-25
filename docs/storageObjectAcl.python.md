# `google_storage_object_acl`

Refer to the Terraform Registory for docs: [`google_storage_object_acl`](https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl).

# `storageObjectAcl` Submodule <a name="`storageObjectAcl` Submodule" id="@cdktf/provider-google.storageObjectAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageObjectAcl <a name="StorageObjectAcl" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl google_storage_object_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_object_acl

storageObjectAcl.StorageObjectAcl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  object: str,
  id: str = None,
  predefined_acl: str = None,
  role_entity: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#bucket StorageObjectAcl#bucket}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#object StorageObjectAcl#object}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#id StorageObjectAcl#id}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.predefinedAcl">predefined_acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#predefined_acl StorageObjectAcl#predefined_acl}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.roleEntity">role_entity</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#role_entity StorageObjectAcl#role_entity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#bucket StorageObjectAcl#bucket}.

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#object StorageObjectAcl#object}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#id StorageObjectAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `predefined_acl`<sup>Optional</sup> <a name="predefined_acl" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.predefinedAcl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#predefined_acl StorageObjectAcl#predefined_acl}.

---

##### `role_entity`<sup>Optional</sup> <a name="role_entity" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.roleEntity"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#role_entity StorageObjectAcl#role_entity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetPredefinedAcl">reset_predefined_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetRoleEntity">reset_role_entity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_predefined_acl` <a name="reset_predefined_acl" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetPredefinedAcl"></a>

```python
def reset_predefined_acl() -> None
```

##### `reset_role_entity` <a name="reset_role_entity" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetRoleEntity"></a>

```python
def reset_role_entity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import storage_object_acl

storageObjectAcl.StorageObjectAcl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import storage_object_acl

storageObjectAcl.StorageObjectAcl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import storage_object_acl

storageObjectAcl.StorageObjectAcl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.predefinedAclInput">predefined_acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.roleEntityInput">role_entity_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.predefinedAcl">predefined_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.roleEntity">role_entity</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `predefined_acl_input`<sup>Optional</sup> <a name="predefined_acl_input" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.predefinedAclInput"></a>

```python
predefined_acl_input: str
```

- *Type:* str

---

##### `role_entity_input`<sup>Optional</sup> <a name="role_entity_input" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.roleEntityInput"></a>

```python
role_entity_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `predefined_acl`<sup>Required</sup> <a name="predefined_acl" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.predefinedAcl"></a>

```python
predefined_acl: str
```

- *Type:* str

---

##### `role_entity`<sup>Required</sup> <a name="role_entity" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.roleEntity"></a>

```python
role_entity: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageObjectAclConfig <a name="StorageObjectAclConfig" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_object_acl

storageObjectAcl.StorageObjectAclConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  object: str,
  id: str = None,
  predefined_acl: str = None,
  role_entity: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#bucket StorageObjectAcl#bucket}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#object StorageObjectAcl#object}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#id StorageObjectAcl#id}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.predefinedAcl">predefined_acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#predefined_acl StorageObjectAcl#predefined_acl}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.roleEntity">role_entity</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#role_entity StorageObjectAcl#role_entity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#bucket StorageObjectAcl#bucket}.

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#object StorageObjectAcl#object}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#id StorageObjectAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `predefined_acl`<sup>Optional</sup> <a name="predefined_acl" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.predefinedAcl"></a>

```python
predefined_acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#predefined_acl StorageObjectAcl#predefined_acl}.

---

##### `role_entity`<sup>Optional</sup> <a name="role_entity" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.roleEntity"></a>

```python
role_entity: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/storage_object_acl#role_entity StorageObjectAcl#role_entity}.

---



