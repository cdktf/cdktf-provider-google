# `endpointsServiceConsumersIamBinding` Submodule <a name="`endpointsServiceConsumersIamBinding` Submodule" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EndpointsServiceConsumersIamBinding <a name="EndpointsServiceConsumersIamBinding" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding google_endpoints_service_consumers_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import endpoints_service_consumers_iam_binding

endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  consumer_project: str,
  members: typing.List[str],
  role: str,
  service_name: str,
  condition: EndpointsServiceConsumersIamBindingCondition = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.consumerProject">consumer_project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#consumer_project EndpointsServiceConsumersIamBinding#consumer_project}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#members EndpointsServiceConsumersIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#role EndpointsServiceConsumersIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#service_name EndpointsServiceConsumersIamBinding#service_name}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#id EndpointsServiceConsumersIamBinding#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `consumer_project`<sup>Required</sup> <a name="consumer_project" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.consumerProject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#consumer_project EndpointsServiceConsumersIamBinding#consumer_project}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#members EndpointsServiceConsumersIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#role EndpointsServiceConsumersIamBinding#role}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#service_name EndpointsServiceConsumersIamBinding#service_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#condition EndpointsServiceConsumersIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#id EndpointsServiceConsumersIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#expression EndpointsServiceConsumersIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#title EndpointsServiceConsumersIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#description EndpointsServiceConsumersIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EndpointsServiceConsumersIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import endpoints_service_consumers_iam_binding

endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import endpoints_service_consumers_iam_binding

endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import endpoints_service_consumers_iam_binding

endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import endpoints_service_consumers_iam_binding

endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EndpointsServiceConsumersIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EndpointsServiceConsumersIamBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EndpointsServiceConsumersIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EndpointsServiceConsumersIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference">EndpointsServiceConsumersIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.consumerProjectInput">consumer_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.consumerProject">consumer_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.condition"></a>

```python
condition: EndpointsServiceConsumersIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference">EndpointsServiceConsumersIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.conditionInput"></a>

```python
condition_input: EndpointsServiceConsumersIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a>

---

##### `consumer_project_input`<sup>Optional</sup> <a name="consumer_project_input" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.consumerProjectInput"></a>

```python
consumer_project_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `consumer_project`<sup>Required</sup> <a name="consumer_project" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.consumerProject"></a>

```python
consumer_project: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EndpointsServiceConsumersIamBindingCondition <a name="EndpointsServiceConsumersIamBindingCondition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import endpoints_service_consumers_iam_binding

endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#expression EndpointsServiceConsumersIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#title EndpointsServiceConsumersIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#description EndpointsServiceConsumersIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#expression EndpointsServiceConsumersIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#title EndpointsServiceConsumersIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#description EndpointsServiceConsumersIamBinding#description}.

---

### EndpointsServiceConsumersIamBindingConfig <a name="EndpointsServiceConsumersIamBindingConfig" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import endpoints_service_consumers_iam_binding

endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  consumer_project: str,
  members: typing.List[str],
  role: str,
  service_name: str,
  condition: EndpointsServiceConsumersIamBindingCondition = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.consumerProject">consumer_project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#consumer_project EndpointsServiceConsumersIamBinding#consumer_project}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#members EndpointsServiceConsumersIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#role EndpointsServiceConsumersIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#service_name EndpointsServiceConsumersIamBinding#service_name}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#id EndpointsServiceConsumersIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `consumer_project`<sup>Required</sup> <a name="consumer_project" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.consumerProject"></a>

```python
consumer_project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#consumer_project EndpointsServiceConsumersIamBinding#consumer_project}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#members EndpointsServiceConsumersIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#role EndpointsServiceConsumersIamBinding#role}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#service_name EndpointsServiceConsumersIamBinding#service_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.condition"></a>

```python
condition: EndpointsServiceConsumersIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#condition EndpointsServiceConsumersIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/endpoints_service_consumers_iam_binding#id EndpointsServiceConsumersIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### EndpointsServiceConsumersIamBindingConditionOutputReference <a name="EndpointsServiceConsumersIamBindingConditionOutputReference" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import endpoints_service_consumers_iam_binding

endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: EndpointsServiceConsumersIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a>

---



