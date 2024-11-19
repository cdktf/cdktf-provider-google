# `apigeeDeveloper` Submodule <a name="`apigeeDeveloper` Submodule" id="@cdktf/provider-google.apigeeDeveloper"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeDeveloper <a name="ApigeeDeveloper" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer google_apigee_developer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_developer

apigeeDeveloper.ApigeeDeveloper(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  first_name: str,
  last_name: str,
  org_id: str,
  user_name: str,
  attributes: typing.Union[IResolvable, typing.List[ApigeeDeveloperAttributes]] = None,
  id: str = None,
  timeouts: ApigeeDeveloperTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.email">email</a></code> | <code>str</code> | Email address of the developer. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.firstName">first_name</a></code> | <code>str</code> | First name of the developer. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.lastName">last_name</a></code> | <code>str</code> | Last name of the developer. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | User name of the developer. Not used by Apigee hybrid. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.attributes">attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes">ApigeeDeveloperAttributes</a>]]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#id ApigeeDeveloper#id}. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts">ApigeeDeveloperTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.email"></a>

- *Type:* str

Email address of the developer.

This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#email ApigeeDeveloper#email}

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.firstName"></a>

- *Type:* str

First name of the developer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#first_name ApigeeDeveloper#first_name}

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.lastName"></a>

- *Type:* str

Last name of the developer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#last_name ApigeeDeveloper#last_name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#org_id ApigeeDeveloper#org_id}

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.userName"></a>

- *Type:* str

User name of the developer. Not used by Apigee hybrid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#user_name ApigeeDeveloper#user_name}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.attributes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes">ApigeeDeveloperAttributes</a>]]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#attributes ApigeeDeveloper#attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#id ApigeeDeveloper#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts">ApigeeDeveloperTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#timeouts ApigeeDeveloper#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attributes` <a name="put_attributes" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.putAttributes"></a>

```python
def put_attributes(
  value: typing.Union[IResolvable, typing.List[ApigeeDeveloperAttributes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.putAttributes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes">ApigeeDeveloperAttributes</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#create ApigeeDeveloper#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#delete ApigeeDeveloper#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#update ApigeeDeveloper#update}.

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigeeDeveloper resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_developer

apigeeDeveloper.ApigeeDeveloper.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_developer

apigeeDeveloper.ApigeeDeveloper.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_developer

apigeeDeveloper.ApigeeDeveloper.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apigee_developer

apigeeDeveloper.ApigeeDeveloper.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigeeDeveloper resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeDeveloper to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeDeveloper that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeDeveloper to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList">ApigeeDeveloperAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.lastModifiedAt">last_modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.organizatioName">organizatio_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference">ApigeeDeveloperTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.attributesInput">attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes">ApigeeDeveloperAttributes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts">ApigeeDeveloperTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.attributes"></a>

```python
attributes: ApigeeDeveloperAttributesList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList">ApigeeDeveloperAttributesList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `last_modified_at`<sup>Required</sup> <a name="last_modified_at" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.lastModifiedAt"></a>

```python
last_modified_at: str
```

- *Type:* str

---

##### `organizatio_name`<sup>Required</sup> <a name="organizatio_name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.organizatioName"></a>

```python
organizatio_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.timeouts"></a>

```python
timeouts: ApigeeDeveloperTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference">ApigeeDeveloperTimeoutsOutputReference</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.attributesInput"></a>

```python
attributes_input: typing.Union[IResolvable, typing.List[ApigeeDeveloperAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes">ApigeeDeveloperAttributes</a>]]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeDeveloperTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts">ApigeeDeveloperTimeouts</a>]

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloper.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeDeveloperAttributes <a name="ApigeeDeveloperAttributes" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_developer

apigeeDeveloper.ApigeeDeveloperAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes.property.name">name</a></code> | <code>str</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes.property.value">value</a></code> | <code>str</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#name ApigeeDeveloper#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#value ApigeeDeveloper#value}

---

### ApigeeDeveloperConfig <a name="ApigeeDeveloperConfig" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_developer

apigeeDeveloper.ApigeeDeveloperConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  first_name: str,
  last_name: str,
  org_id: str,
  user_name: str,
  attributes: typing.Union[IResolvable, typing.List[ApigeeDeveloperAttributes]] = None,
  id: str = None,
  timeouts: ApigeeDeveloperTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.email">email</a></code> | <code>str</code> | Email address of the developer. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.firstName">first_name</a></code> | <code>str</code> | First name of the developer. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.lastName">last_name</a></code> | <code>str</code> | Last name of the developer. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.userName">user_name</a></code> | <code>str</code> | User name of the developer. Not used by Apigee hybrid. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.attributes">attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes">ApigeeDeveloperAttributes</a>]]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#id ApigeeDeveloper#id}. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts">ApigeeDeveloperTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the developer.

This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#email ApigeeDeveloper#email}

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

First name of the developer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#first_name ApigeeDeveloper#first_name}

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Last name of the developer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#last_name ApigeeDeveloper#last_name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#org_id ApigeeDeveloper#org_id}

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

User name of the developer. Not used by Apigee hybrid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#user_name ApigeeDeveloper#user_name}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.attributes"></a>

```python
attributes: typing.Union[IResolvable, typing.List[ApigeeDeveloperAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes">ApigeeDeveloperAttributes</a>]]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#attributes ApigeeDeveloper#attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#id ApigeeDeveloper#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperConfig.property.timeouts"></a>

```python
timeouts: ApigeeDeveloperTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts">ApigeeDeveloperTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#timeouts ApigeeDeveloper#timeouts}

---

### ApigeeDeveloperTimeouts <a name="ApigeeDeveloperTimeouts" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_developer

apigeeDeveloper.ApigeeDeveloperTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#create ApigeeDeveloper#create}. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#delete ApigeeDeveloper#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#update ApigeeDeveloper#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#create ApigeeDeveloper#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#delete ApigeeDeveloper#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/apigee_developer#update ApigeeDeveloper#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeDeveloperAttributesList <a name="ApigeeDeveloperAttributesList" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_developer

apigeeDeveloper.ApigeeDeveloperAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeDeveloperAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes">ApigeeDeveloperAttributes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeDeveloperAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes">ApigeeDeveloperAttributes</a>]]

---


### ApigeeDeveloperAttributesOutputReference <a name="ApigeeDeveloperAttributesOutputReference" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_developer

apigeeDeveloper.ApigeeDeveloperAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes">ApigeeDeveloperAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeDeveloperAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperAttributes">ApigeeDeveloperAttributes</a>]

---


### ApigeeDeveloperTimeoutsOutputReference <a name="ApigeeDeveloperTimeoutsOutputReference" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_developer

apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts">ApigeeDeveloperTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeDeveloperTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeDeveloper.ApigeeDeveloperTimeouts">ApigeeDeveloperTimeouts</a>]

---



