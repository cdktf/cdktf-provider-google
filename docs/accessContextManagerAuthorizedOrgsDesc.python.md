# `accessContextManagerAuthorizedOrgsDesc` Submodule <a name="`accessContextManagerAuthorizedOrgsDesc` Submodule" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAuthorizedOrgsDesc <a name="AccessContextManagerAuthorizedOrgsDesc" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc google_access_context_manager_authorized_orgs_desc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_authorized_orgs_desc

accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc(
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
  parent: str,
  asset_type: str = None,
  authorization_direction: str = None,
  authorization_type: str = None,
  id: str = None,
  orgs: typing.List[str] = None,
  timeouts: AccessContextManagerAuthorizedOrgsDescTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.name">name</a></code> | <code>str</code> | Resource name for the 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.assetType">asset_type</a></code> | <code>str</code> | The type of entities that need to use the authorization relationship during evaluation, such as a device. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.authorizationDirection">authorization_direction</a></code> | <code>str</code> | The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.authorizationType">authorization_type</a></code> | <code>str</code> | A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#id AccessContextManagerAuthorizedOrgsDesc#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.orgs">orgs</a></code> | <code>typing.List[str]</code> | The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.name"></a>

- *Type:* str

Resource name for the 'AuthorizedOrgsDesc'.

Format:
'accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}'.
The 'authorized_orgs_desc' component must begin with a letter, followed by
alphanumeric characters or '_'.
After you create an 'AuthorizedOrgsDesc', you cannot change its 'name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#name AccessContextManagerAuthorizedOrgsDesc#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.parent"></a>

- *Type:* str

Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#parent AccessContextManagerAuthorizedOrgsDesc#parent}

---

##### `asset_type`<sup>Optional</sup> <a name="asset_type" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.assetType"></a>

- *Type:* str

The type of entities that need to use the authorization relationship during evaluation, such as a device.

Valid values are "ASSET_TYPE_DEVICE" and
"ASSET_TYPE_CREDENTIAL_STRENGTH". Possible values: ["ASSET_TYPE_DEVICE", "ASSET_TYPE_CREDENTIAL_STRENGTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#asset_type AccessContextManagerAuthorizedOrgsDesc#asset_type}

---

##### `authorization_direction`<sup>Optional</sup> <a name="authorization_direction" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.authorizationDirection"></a>

- *Type:* str

The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field.

The valid values for this
field include the following:

AUTHORIZATION_DIRECTION_FROM: Allows this organization to evaluate traffic
in the organizations listed in the 'orgs' field.

AUTHORIZATION_DIRECTION_TO: Allows the organizations listed in the 'orgs'
field to evaluate the traffic in this organization.

For the authorization relationship to take effect, all of the organizations
must authorize and specify the appropriate relationship direction. For
example, if organization A authorized organization B and C to evaluate its
traffic, by specifying "AUTHORIZATION_DIRECTION_TO" as the authorization
direction, organizations B and C must specify
"AUTHORIZATION_DIRECTION_FROM" as the authorization direction in their
"AuthorizedOrgsDesc" resource. Possible values: ["AUTHORIZATION_DIRECTION_TO", "AUTHORIZATION_DIRECTION_FROM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#authorization_direction AccessContextManagerAuthorizedOrgsDesc#authorization_direction}

---

##### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.authorizationType"></a>

- *Type:* str

A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#authorization_type AccessContextManagerAuthorizedOrgsDesc#authorization_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#id AccessContextManagerAuthorizedOrgsDesc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orgs`<sup>Optional</sup> <a name="orgs" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.orgs"></a>

- *Type:* typing.List[str]

The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#orgs AccessContextManagerAuthorizedOrgsDesc#orgs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#timeouts AccessContextManagerAuthorizedOrgsDesc#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAssetType">reset_asset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationDirection">reset_authorization_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationType">reset_authorization_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOrgs">reset_orgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#create AccessContextManagerAuthorizedOrgsDesc#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#delete AccessContextManagerAuthorizedOrgsDesc#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#update AccessContextManagerAuthorizedOrgsDesc#update}.

---

##### `reset_asset_type` <a name="reset_asset_type" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAssetType"></a>

```python
def reset_asset_type() -> None
```

##### `reset_authorization_direction` <a name="reset_authorization_direction" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationDirection"></a>

```python
def reset_authorization_direction() -> None
```

##### `reset_authorization_type` <a name="reset_authorization_type" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationType"></a>

```python
def reset_authorization_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_orgs` <a name="reset_orgs" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOrgs"></a>

```python
def reset_orgs() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccessContextManagerAuthorizedOrgsDesc resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_authorized_orgs_desc

accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_authorized_orgs_desc

accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_authorized_orgs_desc

accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_authorized_orgs_desc

accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccessContextManagerAuthorizedOrgsDesc resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccessContextManagerAuthorizedOrgsDesc to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccessContextManagerAuthorizedOrgsDesc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerAuthorizedOrgsDesc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference">AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetTypeInput">asset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirectionInput">authorization_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationTypeInput">authorization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgsInput">orgs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetType">asset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirection">authorization_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgs">orgs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeouts"></a>

```python
timeouts: AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference">AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `asset_type_input`<sup>Optional</sup> <a name="asset_type_input" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetTypeInput"></a>

```python
asset_type_input: str
```

- *Type:* str

---

##### `authorization_direction_input`<sup>Optional</sup> <a name="authorization_direction_input" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirectionInput"></a>

```python
authorization_direction_input: str
```

- *Type:* str

---

##### `authorization_type_input`<sup>Optional</sup> <a name="authorization_type_input" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationTypeInput"></a>

```python
authorization_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `orgs_input`<sup>Optional</sup> <a name="orgs_input" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgsInput"></a>

```python
orgs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AccessContextManagerAuthorizedOrgsDescTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>]

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

---

##### `authorization_direction`<sup>Required</sup> <a name="authorization_direction" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirection"></a>

```python
authorization_direction: str
```

- *Type:* str

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `orgs`<sup>Required</sup> <a name="orgs" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgs"></a>

```python
orgs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAuthorizedOrgsDescConfig <a name="AccessContextManagerAuthorizedOrgsDescConfig" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_authorized_orgs_desc

accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  asset_type: str = None,
  authorization_direction: str = None,
  authorization_type: str = None,
  id: str = None,
  orgs: typing.List[str] = None,
  timeouts: AccessContextManagerAuthorizedOrgsDescTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.name">name</a></code> | <code>str</code> | Resource name for the 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.parent">parent</a></code> | <code>str</code> | Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.assetType">asset_type</a></code> | <code>str</code> | The type of entities that need to use the authorization relationship during evaluation, such as a device. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationDirection">authorization_direction</a></code> | <code>str</code> | The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationType">authorization_type</a></code> | <code>str</code> | A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#id AccessContextManagerAuthorizedOrgsDesc#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.orgs">orgs</a></code> | <code>typing.List[str]</code> | The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Resource name for the 'AuthorizedOrgsDesc'.

Format:
'accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}'.
The 'authorized_orgs_desc' component must begin with a letter, followed by
alphanumeric characters or '_'.
After you create an 'AuthorizedOrgsDesc', you cannot change its 'name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#name AccessContextManagerAuthorizedOrgsDesc#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#parent AccessContextManagerAuthorizedOrgsDesc#parent}

---

##### `asset_type`<sup>Optional</sup> <a name="asset_type" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

The type of entities that need to use the authorization relationship during evaluation, such as a device.

Valid values are "ASSET_TYPE_DEVICE" and
"ASSET_TYPE_CREDENTIAL_STRENGTH". Possible values: ["ASSET_TYPE_DEVICE", "ASSET_TYPE_CREDENTIAL_STRENGTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#asset_type AccessContextManagerAuthorizedOrgsDesc#asset_type}

---

##### `authorization_direction`<sup>Optional</sup> <a name="authorization_direction" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationDirection"></a>

```python
authorization_direction: str
```

- *Type:* str

The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field.

The valid values for this
field include the following:

AUTHORIZATION_DIRECTION_FROM: Allows this organization to evaluate traffic
in the organizations listed in the 'orgs' field.

AUTHORIZATION_DIRECTION_TO: Allows the organizations listed in the 'orgs'
field to evaluate the traffic in this organization.

For the authorization relationship to take effect, all of the organizations
must authorize and specify the appropriate relationship direction. For
example, if organization A authorized organization B and C to evaluate its
traffic, by specifying "AUTHORIZATION_DIRECTION_TO" as the authorization
direction, organizations B and C must specify
"AUTHORIZATION_DIRECTION_FROM" as the authorization direction in their
"AuthorizedOrgsDesc" resource. Possible values: ["AUTHORIZATION_DIRECTION_TO", "AUTHORIZATION_DIRECTION_FROM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#authorization_direction AccessContextManagerAuthorizedOrgsDesc#authorization_direction}

---

##### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#authorization_type AccessContextManagerAuthorizedOrgsDesc#authorization_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#id AccessContextManagerAuthorizedOrgsDesc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orgs`<sup>Optional</sup> <a name="orgs" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.orgs"></a>

```python
orgs: typing.List[str]
```

- *Type:* typing.List[str]

The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#orgs AccessContextManagerAuthorizedOrgsDesc#orgs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.timeouts"></a>

```python
timeouts: AccessContextManagerAuthorizedOrgsDescTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#timeouts AccessContextManagerAuthorizedOrgsDesc#timeouts}

---

### AccessContextManagerAuthorizedOrgsDescTimeouts <a name="AccessContextManagerAuthorizedOrgsDescTimeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_authorized_orgs_desc

accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#create AccessContextManagerAuthorizedOrgsDesc#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#delete AccessContextManagerAuthorizedOrgsDesc#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#update AccessContextManagerAuthorizedOrgsDesc#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#create AccessContextManagerAuthorizedOrgsDesc#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#delete AccessContextManagerAuthorizedOrgsDesc#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/access_context_manager_authorized_orgs_desc#update AccessContextManagerAuthorizedOrgsDesc#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference <a name="AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_authorized_orgs_desc

accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessContextManagerAuthorizedOrgsDescTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>]

---



