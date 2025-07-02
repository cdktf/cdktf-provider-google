# `apigeeSecurityMonitoringCondition` Submodule <a name="`apigeeSecurityMonitoringCondition` Submodule" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityMonitoringCondition <a name="ApigeeSecurityMonitoringCondition" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition google_apigee_security_monitoring_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_monitoring_condition

apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  condition_id: str,
  org_id: str,
  profile: str,
  scope: str,
  id: str = None,
  include_all_resources: ApigeeSecurityMonitoringConditionIncludeAllResources = None,
  timeouts: ApigeeSecurityMonitoringConditionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.conditionId">condition_id</a></code> | <code>str</code> | Resource ID of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.profile">profile</a></code> | <code>str</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.scope">scope</a></code> | <code>str</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#id ApigeeSecurityMonitoringCondition#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.includeAllResources">include_all_resources</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | include_all_resources block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition_id`<sup>Required</sup> <a name="condition_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.conditionId"></a>

- *Type:* str

Resource ID of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#condition_id ApigeeSecurityMonitoringCondition#condition_id}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#org_id ApigeeSecurityMonitoringCondition#org_id}

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.profile"></a>

- *Type:* str

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#profile ApigeeSecurityMonitoringCondition#profile}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.scope"></a>

- *Type:* str

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#scope ApigeeSecurityMonitoringCondition#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#id ApigeeSecurityMonitoringCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_all_resources`<sup>Optional</sup> <a name="include_all_resources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.includeAllResources"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a>

include_all_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#include_all_resources ApigeeSecurityMonitoringCondition#include_all_resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#timeouts ApigeeSecurityMonitoringCondition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putIncludeAllResources">put_include_all_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetIncludeAllResources">reset_include_all_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_include_all_resources` <a name="put_include_all_resources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putIncludeAllResources"></a>

```python
def put_include_all_resources() -> None
```

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#create ApigeeSecurityMonitoringCondition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#delete ApigeeSecurityMonitoringCondition#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#update ApigeeSecurityMonitoringCondition#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_all_resources` <a name="reset_include_all_resources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetIncludeAllResources"></a>

```python
def reset_include_all_resources() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigeeSecurityMonitoringCondition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_monitoring_condition

apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_monitoring_condition

apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_monitoring_condition

apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_monitoring_condition

apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigeeSecurityMonitoringCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeSecurityMonitoringCondition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeSecurityMonitoringCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityMonitoringCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.includeAllResources">include_all_resources</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference">ApigeeSecurityMonitoringConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.totalDeployedResources">total_deployed_resources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.totalMonitoredResources">total_monitored_resources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.conditionIdInput">condition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.includeAllResourcesInput">include_all_resources_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.conditionId">condition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `include_all_resources`<sup>Required</sup> <a name="include_all_resources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.includeAllResources"></a>

```python
include_all_resources: ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.timeouts"></a>

```python
timeouts: ApigeeSecurityMonitoringConditionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference">ApigeeSecurityMonitoringConditionTimeoutsOutputReference</a>

---

##### `total_deployed_resources`<sup>Required</sup> <a name="total_deployed_resources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.totalDeployedResources"></a>

```python
total_deployed_resources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_monitored_resources`<sup>Required</sup> <a name="total_monitored_resources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.totalMonitoredResources"></a>

```python
total_monitored_resources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `condition_id_input`<sup>Optional</sup> <a name="condition_id_input" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.conditionIdInput"></a>

```python
condition_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_all_resources_input`<sup>Optional</sup> <a name="include_all_resources_input" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.includeAllResourcesInput"></a>

```python
include_all_resources_input: ApigeeSecurityMonitoringConditionIncludeAllResources
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a>

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeSecurityMonitoringConditionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a>]

---

##### `condition_id`<sup>Required</sup> <a name="condition_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.conditionId"></a>

```python
condition_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityMonitoringConditionConfig <a name="ApigeeSecurityMonitoringConditionConfig" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_monitoring_condition

apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  condition_id: str,
  org_id: str,
  profile: str,
  scope: str,
  id: str = None,
  include_all_resources: ApigeeSecurityMonitoringConditionIncludeAllResources = None,
  timeouts: ApigeeSecurityMonitoringConditionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.conditionId">condition_id</a></code> | <code>str</code> | Resource ID of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.profile">profile</a></code> | <code>str</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.scope">scope</a></code> | <code>str</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#id ApigeeSecurityMonitoringCondition#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.includeAllResources">include_all_resources</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | include_all_resources block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition_id`<sup>Required</sup> <a name="condition_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.conditionId"></a>

```python
condition_id: str
```

- *Type:* str

Resource ID of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#condition_id ApigeeSecurityMonitoringCondition#condition_id}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#org_id ApigeeSecurityMonitoringCondition#org_id}

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#profile ApigeeSecurityMonitoringCondition#profile}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#scope ApigeeSecurityMonitoringCondition#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#id ApigeeSecurityMonitoringCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_all_resources`<sup>Optional</sup> <a name="include_all_resources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.includeAllResources"></a>

```python
include_all_resources: ApigeeSecurityMonitoringConditionIncludeAllResources
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a>

include_all_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#include_all_resources ApigeeSecurityMonitoringCondition#include_all_resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.timeouts"></a>

```python
timeouts: ApigeeSecurityMonitoringConditionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#timeouts ApigeeSecurityMonitoringCondition#timeouts}

---

### ApigeeSecurityMonitoringConditionIncludeAllResources <a name="ApigeeSecurityMonitoringConditionIncludeAllResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_monitoring_condition

apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources()
```


### ApigeeSecurityMonitoringConditionTimeouts <a name="ApigeeSecurityMonitoringConditionTimeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_monitoring_condition

apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#create ApigeeSecurityMonitoringCondition#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#delete ApigeeSecurityMonitoringCondition#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#update ApigeeSecurityMonitoringCondition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#create ApigeeSecurityMonitoringCondition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#delete ApigeeSecurityMonitoringCondition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#update ApigeeSecurityMonitoringCondition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference <a name="ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_monitoring_condition

apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeSecurityMonitoringConditionIncludeAllResources
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a>

---


### ApigeeSecurityMonitoringConditionTimeoutsOutputReference <a name="ApigeeSecurityMonitoringConditionTimeoutsOutputReference" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_monitoring_condition

apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeSecurityMonitoringConditionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a>]

---



