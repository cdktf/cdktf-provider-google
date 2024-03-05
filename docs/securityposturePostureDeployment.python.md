# `securityposturePostureDeployment` Submodule <a name="`securityposturePostureDeployment` Submodule" id="@cdktf/provider-google.securityposturePostureDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityposturePostureDeployment <a name="SecurityposturePostureDeployment" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment google_securityposture_posture_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import securityposture_posture_deployment

securityposturePostureDeployment.SecurityposturePostureDeployment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  parent: str,
  posture_deployment_id: str,
  posture_id: str,
  posture_revision_id: str,
  target_resource: str,
  description: str = None,
  id: str = None,
  timeouts: SecurityposturePostureDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource, eg. global'. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.postureDeploymentId">posture_deployment_id</a></code> | <code>str</code> | ID of the posture deployment. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.postureId">posture_id</a></code> | <code>str</code> | Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.postureRevisionId">posture_revision_id</a></code> | <code>str</code> | Revision_id the posture which needs to be deployed. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.targetResource">target_resource</a></code> | <code>str</code> | The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the posture deployment. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#id SecurityposturePostureDeployment#id}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource, eg. global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#location SecurityposturePostureDeployment#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#parent SecurityposturePostureDeployment#parent}

---

##### `posture_deployment_id`<sup>Required</sup> <a name="posture_deployment_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.postureDeploymentId"></a>

- *Type:* str

ID of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#posture_deployment_id SecurityposturePostureDeployment#posture_deployment_id}

---

##### `posture_id`<sup>Required</sup> <a name="posture_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.postureId"></a>

- *Type:* str

Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#posture_id SecurityposturePostureDeployment#posture_id}

---

##### `posture_revision_id`<sup>Required</sup> <a name="posture_revision_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.postureRevisionId"></a>

- *Type:* str

Revision_id the posture which needs to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#posture_revision_id SecurityposturePostureDeployment#posture_revision_id}

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.targetResource"></a>

- *Type:* str

The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#target_resource SecurityposturePostureDeployment#target_resource}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.description"></a>

- *Type:* str

Description of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#description SecurityposturePostureDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#id SecurityposturePostureDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#timeouts SecurityposturePostureDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#create SecurityposturePostureDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#delete SecurityposturePostureDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#update SecurityposturePostureDeployment#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecurityposturePostureDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import securityposture_posture_deployment

securityposturePostureDeployment.SecurityposturePostureDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import securityposture_posture_deployment

securityposturePostureDeployment.SecurityposturePostureDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import securityposture_posture_deployment

securityposturePostureDeployment.SecurityposturePostureDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import securityposture_posture_deployment

securityposturePostureDeployment.SecurityposturePostureDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecurityposturePostureDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityposturePostureDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityposturePostureDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityposturePostureDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.desiredPostureId">desired_posture_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.desiredPostureRevisionId">desired_posture_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.failureMessage">failure_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference">SecurityposturePostureDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureDeploymentIdInput">posture_deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureIdInput">posture_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureRevisionIdInput">posture_revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.targetResourceInput">target_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureDeploymentId">posture_deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureId">posture_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureRevisionId">posture_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.targetResource">target_resource</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `desired_posture_id`<sup>Required</sup> <a name="desired_posture_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.desiredPostureId"></a>

```python
desired_posture_id: str
```

- *Type:* str

---

##### `desired_posture_revision_id`<sup>Required</sup> <a name="desired_posture_revision_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.desiredPostureRevisionId"></a>

```python
desired_posture_revision_id: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `failure_message`<sup>Required</sup> <a name="failure_message" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.failureMessage"></a>

```python
failure_message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.timeouts"></a>

```python
timeouts: SecurityposturePostureDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference">SecurityposturePostureDeploymentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `posture_deployment_id_input`<sup>Optional</sup> <a name="posture_deployment_id_input" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureDeploymentIdInput"></a>

```python
posture_deployment_id_input: str
```

- *Type:* str

---

##### `posture_id_input`<sup>Optional</sup> <a name="posture_id_input" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureIdInput"></a>

```python
posture_id_input: str
```

- *Type:* str

---

##### `posture_revision_id_input`<sup>Optional</sup> <a name="posture_revision_id_input" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureRevisionIdInput"></a>

```python
posture_revision_id_input: str
```

- *Type:* str

---

##### `target_resource_input`<sup>Optional</sup> <a name="target_resource_input" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.targetResourceInput"></a>

```python
target_resource_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SecurityposturePostureDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `posture_deployment_id`<sup>Required</sup> <a name="posture_deployment_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureDeploymentId"></a>

```python
posture_deployment_id: str
```

- *Type:* str

---

##### `posture_id`<sup>Required</sup> <a name="posture_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureId"></a>

```python
posture_id: str
```

- *Type:* str

---

##### `posture_revision_id`<sup>Required</sup> <a name="posture_revision_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureRevisionId"></a>

```python
posture_revision_id: str
```

- *Type:* str

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.targetResource"></a>

```python
target_resource: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityposturePostureDeploymentConfig <a name="SecurityposturePostureDeploymentConfig" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import securityposture_posture_deployment

securityposturePostureDeployment.SecurityposturePostureDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  parent: str,
  posture_deployment_id: str,
  posture_id: str,
  posture_revision_id: str,
  target_resource: str,
  description: str = None,
  id: str = None,
  timeouts: SecurityposturePostureDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.location">location</a></code> | <code>str</code> | The location of the resource, eg. global'. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureDeploymentId">posture_deployment_id</a></code> | <code>str</code> | ID of the posture deployment. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureId">posture_id</a></code> | <code>str</code> | Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureRevisionId">posture_revision_id</a></code> | <code>str</code> | Revision_id the posture which needs to be deployed. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.targetResource">target_resource</a></code> | <code>str</code> | The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.description">description</a></code> | <code>str</code> | Description of the posture deployment. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#id SecurityposturePostureDeployment#id}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource, eg. global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#location SecurityposturePostureDeployment#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#parent SecurityposturePostureDeployment#parent}

---

##### `posture_deployment_id`<sup>Required</sup> <a name="posture_deployment_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureDeploymentId"></a>

```python
posture_deployment_id: str
```

- *Type:* str

ID of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#posture_deployment_id SecurityposturePostureDeployment#posture_deployment_id}

---

##### `posture_id`<sup>Required</sup> <a name="posture_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureId"></a>

```python
posture_id: str
```

- *Type:* str

Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#posture_id SecurityposturePostureDeployment#posture_id}

---

##### `posture_revision_id`<sup>Required</sup> <a name="posture_revision_id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureRevisionId"></a>

```python
posture_revision_id: str
```

- *Type:* str

Revision_id the posture which needs to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#posture_revision_id SecurityposturePostureDeployment#posture_revision_id}

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.targetResource"></a>

```python
target_resource: str
```

- *Type:* str

The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#target_resource SecurityposturePostureDeployment#target_resource}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#description SecurityposturePostureDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#id SecurityposturePostureDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.timeouts"></a>

```python
timeouts: SecurityposturePostureDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#timeouts SecurityposturePostureDeployment#timeouts}

---

### SecurityposturePostureDeploymentTimeouts <a name="SecurityposturePostureDeploymentTimeouts" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import securityposture_posture_deployment

securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#create SecurityposturePostureDeployment#create}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#delete SecurityposturePostureDeployment#delete}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#update SecurityposturePostureDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#create SecurityposturePostureDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#delete SecurityposturePostureDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/securityposture_posture_deployment#update SecurityposturePostureDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityposturePostureDeploymentTimeoutsOutputReference <a name="SecurityposturePostureDeploymentTimeoutsOutputReference" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import securityposture_posture_deployment

securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecurityposturePostureDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>]

---



