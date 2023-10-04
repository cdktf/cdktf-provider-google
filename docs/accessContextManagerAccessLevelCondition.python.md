# `google_access_context_manager_access_level_condition`

Refer to the Terraform Registory for docs: [`google_access_context_manager_access_level_condition`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition).

# `accessContextManagerAccessLevelCondition` Submodule <a name="`accessContextManagerAccessLevelCondition` Submodule" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAccessLevelCondition <a name="AccessContextManagerAccessLevelCondition" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition google_access_context_manager_access_level_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level_condition

accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_level: str,
  device_policy: AccessContextManagerAccessLevelConditionDevicePolicy = None,
  id: str = None,
  ip_subnetworks: typing.List[str] = None,
  members: typing.List[str] = None,
  negate: typing.Union[bool, IResolvable] = None,
  regions: typing.List[str] = None,
  required_access_levels: typing.List[str] = None,
  timeouts: AccessContextManagerAccessLevelConditionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | The name of the Access Level to add this condition to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.devicePolicy">device_policy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#id AccessContextManagerAccessLevelCondition#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.ipSubnetworks">ip_subnetworks</a></code> | <code>typing.List[str]</code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.regions">regions</a></code> | <code>typing.List[str]</code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.requiredAccessLevels">required_access_levels</a></code> | <code>typing.List[str]</code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.accessLevel"></a>

- *Type:* str

The name of the Access Level to add this condition to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#access_level AccessContextManagerAccessLevelCondition#access_level}

---

##### `device_policy`<sup>Optional</sup> <a name="device_policy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.devicePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#device_policy AccessContextManagerAccessLevelCondition#device_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#id AccessContextManagerAccessLevelCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_subnetworks`<sup>Optional</sup> <a name="ip_subnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.ipSubnetworks"></a>

- *Type:* typing.List[str]

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#ip_subnetworks AccessContextManagerAccessLevelCondition#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#members AccessContextManagerAccessLevelCondition#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.negate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#negate AccessContextManagerAccessLevelCondition#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.regions"></a>

- *Type:* typing.List[str]

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#regions AccessContextManagerAccessLevelCondition#regions}

---

##### `required_access_levels`<sup>Optional</sup> <a name="required_access_levels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.requiredAccessLevels"></a>

- *Type:* typing.List[str]

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#required_access_levels AccessContextManagerAccessLevelCondition#required_access_levels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#timeouts AccessContextManagerAccessLevelCondition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy">put_device_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetDevicePolicy">reset_device_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetIpSubnetworks">reset_ip_subnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetMembers">reset_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetNegate">reset_negate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetRegions">reset_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetRequiredAccessLevels">reset_required_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_device_policy` <a name="put_device_policy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy"></a>

```python
def put_device_policy(
  allowed_device_management_levels: typing.List[str] = None,
  allowed_encryption_statuses: typing.List[str] = None,
  os_constraints: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]] = None,
  require_admin_approval: typing.Union[bool, IResolvable] = None,
  require_corp_owned: typing.Union[bool, IResolvable] = None,
  require_screen_lock: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_device_management_levels`<sup>Optional</sup> <a name="allowed_device_management_levels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.allowedDeviceManagementLevels"></a>

- *Type:* typing.List[str]

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#allowed_device_management_levels AccessContextManagerAccessLevelCondition#allowed_device_management_levels}

---

###### `allowed_encryption_statuses`<sup>Optional</sup> <a name="allowed_encryption_statuses" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.allowedEncryptionStatuses"></a>

- *Type:* typing.List[str]

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#allowed_encryption_statuses AccessContextManagerAccessLevelCondition#allowed_encryption_statuses}

---

###### `os_constraints`<sup>Optional</sup> <a name="os_constraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.osConstraints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#os_constraints AccessContextManagerAccessLevelCondition#os_constraints}

---

###### `require_admin_approval`<sup>Optional</sup> <a name="require_admin_approval" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.requireAdminApproval"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#require_admin_approval AccessContextManagerAccessLevelCondition#require_admin_approval}

---

###### `require_corp_owned`<sup>Optional</sup> <a name="require_corp_owned" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.requireCorpOwned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#require_corp_owned AccessContextManagerAccessLevelCondition#require_corp_owned}

---

###### `require_screen_lock`<sup>Optional</sup> <a name="require_screen_lock" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.requireScreenLock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#require_screen_lock AccessContextManagerAccessLevelCondition#require_screen_lock}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#create AccessContextManagerAccessLevelCondition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#delete AccessContextManagerAccessLevelCondition#delete}.

---

##### `reset_device_policy` <a name="reset_device_policy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetDevicePolicy"></a>

```python
def reset_device_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_subnetworks` <a name="reset_ip_subnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetIpSubnetworks"></a>

```python
def reset_ip_subnetworks() -> None
```

##### `reset_members` <a name="reset_members" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetMembers"></a>

```python
def reset_members() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetNegate"></a>

```python
def reset_negate() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetRegions"></a>

```python
def reset_regions() -> None
```

##### `reset_required_access_levels` <a name="reset_required_access_levels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetRequiredAccessLevels"></a>

```python
def reset_required_access_levels() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level_condition

accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level_condition

accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level_condition

accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.devicePolicy">device_policy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference">AccessContextManagerAccessLevelConditionDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference">AccessContextManagerAccessLevelConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.devicePolicyInput">device_policy_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.ipSubnetworksInput">ip_subnetworks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.negateInput">negate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.requiredAccessLevelsInput">required_access_levels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.ipSubnetworks">ip_subnetworks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.requiredAccessLevels">required_access_levels</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `device_policy`<sup>Required</sup> <a name="device_policy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.devicePolicy"></a>

```python
device_policy: AccessContextManagerAccessLevelConditionDevicePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference">AccessContextManagerAccessLevelConditionDevicePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.timeouts"></a>

```python
timeouts: AccessContextManagerAccessLevelConditionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference">AccessContextManagerAccessLevelConditionTimeoutsOutputReference</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `device_policy_input`<sup>Optional</sup> <a name="device_policy_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.devicePolicyInput"></a>

```python
device_policy_input: AccessContextManagerAccessLevelConditionDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_subnetworks_input`<sup>Optional</sup> <a name="ip_subnetworks_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.ipSubnetworksInput"></a>

```python
ip_subnetworks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.negateInput"></a>

```python
negate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required_access_levels_input`<sup>Optional</sup> <a name="required_access_levels_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.requiredAccessLevelsInput"></a>

```python
required_access_levels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AccessContextManagerAccessLevelConditionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a>]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_subnetworks`<sup>Required</sup> <a name="ip_subnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.ipSubnetworks"></a>

```python
ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required_access_levels`<sup>Required</sup> <a name="required_access_levels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.requiredAccessLevels"></a>

```python
required_access_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAccessLevelConditionConfig <a name="AccessContextManagerAccessLevelConditionConfig" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level_condition

accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_level: str,
  device_policy: AccessContextManagerAccessLevelConditionDevicePolicy = None,
  id: str = None,
  ip_subnetworks: typing.List[str] = None,
  members: typing.List[str] = None,
  negate: typing.Union[bool, IResolvable] = None,
  regions: typing.List[str] = None,
  required_access_levels: typing.List[str] = None,
  timeouts: AccessContextManagerAccessLevelConditionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.accessLevel">access_level</a></code> | <code>str</code> | The name of the Access Level to add this condition to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.devicePolicy">device_policy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#id AccessContextManagerAccessLevelCondition#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.ipSubnetworks">ip_subnetworks</a></code> | <code>typing.List[str]</code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.members">members</a></code> | <code>typing.List[str]</code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.regions">regions</a></code> | <code>typing.List[str]</code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.requiredAccessLevels">required_access_levels</a></code> | <code>typing.List[str]</code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

The name of the Access Level to add this condition to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#access_level AccessContextManagerAccessLevelCondition#access_level}

---

##### `device_policy`<sup>Optional</sup> <a name="device_policy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.devicePolicy"></a>

```python
device_policy: AccessContextManagerAccessLevelConditionDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#device_policy AccessContextManagerAccessLevelCondition#device_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#id AccessContextManagerAccessLevelCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_subnetworks`<sup>Optional</sup> <a name="ip_subnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.ipSubnetworks"></a>

```python
ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#ip_subnetworks AccessContextManagerAccessLevelCondition#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#members AccessContextManagerAccessLevelCondition#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#negate AccessContextManagerAccessLevelCondition#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#regions AccessContextManagerAccessLevelCondition#regions}

---

##### `required_access_levels`<sup>Optional</sup> <a name="required_access_levels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.requiredAccessLevels"></a>

```python
required_access_levels: typing.List[str]
```

- *Type:* typing.List[str]

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#required_access_levels AccessContextManagerAccessLevelCondition#required_access_levels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.timeouts"></a>

```python
timeouts: AccessContextManagerAccessLevelConditionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#timeouts AccessContextManagerAccessLevelCondition#timeouts}

---

### AccessContextManagerAccessLevelConditionDevicePolicy <a name="AccessContextManagerAccessLevelConditionDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level_condition

accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy(
  allowed_device_management_levels: typing.List[str] = None,
  allowed_encryption_statuses: typing.List[str] = None,
  os_constraints: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]] = None,
  require_admin_approval: typing.Union[bool, IResolvable] = None,
  require_corp_owned: typing.Union[bool, IResolvable] = None,
  require_screen_lock: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.allowedDeviceManagementLevels">allowed_device_management_levels</a></code> | <code>typing.List[str]</code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.allowedEncryptionStatuses">allowed_encryption_statuses</a></code> | <code>typing.List[str]</code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.osConstraints">os_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]</code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireAdminApproval">require_admin_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireCorpOwned">require_corp_owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireScreenLock">require_screen_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `allowed_device_management_levels`<sup>Optional</sup> <a name="allowed_device_management_levels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.allowedDeviceManagementLevels"></a>

```python
allowed_device_management_levels: typing.List[str]
```

- *Type:* typing.List[str]

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#allowed_device_management_levels AccessContextManagerAccessLevelCondition#allowed_device_management_levels}

---

##### `allowed_encryption_statuses`<sup>Optional</sup> <a name="allowed_encryption_statuses" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.allowedEncryptionStatuses"></a>

```python
allowed_encryption_statuses: typing.List[str]
```

- *Type:* typing.List[str]

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#allowed_encryption_statuses AccessContextManagerAccessLevelCondition#allowed_encryption_statuses}

---

##### `os_constraints`<sup>Optional</sup> <a name="os_constraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.osConstraints"></a>

```python
os_constraints: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#os_constraints AccessContextManagerAccessLevelCondition#os_constraints}

---

##### `require_admin_approval`<sup>Optional</sup> <a name="require_admin_approval" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireAdminApproval"></a>

```python
require_admin_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#require_admin_approval AccessContextManagerAccessLevelCondition#require_admin_approval}

---

##### `require_corp_owned`<sup>Optional</sup> <a name="require_corp_owned" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireCorpOwned"></a>

```python
require_corp_owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#require_corp_owned AccessContextManagerAccessLevelCondition#require_corp_owned}

---

##### `require_screen_lock`<sup>Optional</sup> <a name="require_screen_lock" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireScreenLock"></a>

```python
require_screen_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#require_screen_lock AccessContextManagerAccessLevelCondition#require_screen_lock}

---

### AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints <a name="AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level_condition

accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints(
  os_type: str,
  minimum_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.osType">os_type</a></code> | <code>str</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.minimumVersion">minimum_version</a></code> | <code>str</code> | The minimum allowed OS version. |

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.osType"></a>

```python
os_type: str
```

- *Type:* str

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#os_type AccessContextManagerAccessLevelCondition#os_type}

---

##### `minimum_version`<sup>Optional</sup> <a name="minimum_version" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.minimumVersion"></a>

```python
minimum_version: str
```

- *Type:* str

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#minimum_version AccessContextManagerAccessLevelCondition#minimum_version}

---

### AccessContextManagerAccessLevelConditionTimeouts <a name="AccessContextManagerAccessLevelConditionTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level_condition

accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#create AccessContextManagerAccessLevelCondition#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#delete AccessContextManagerAccessLevelCondition#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#create AccessContextManagerAccessLevelCondition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/access_context_manager_access_level_condition#delete AccessContextManagerAccessLevelCondition#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList <a name="AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level_condition

accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]

---


### AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference <a name="AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level_condition

accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">reset_minimum_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_minimum_version` <a name="reset_minimum_version" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```python
def reset_minimum_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">minimum_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersion">minimum_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_version_input`<sup>Optional</sup> <a name="minimum_version_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```python
minimum_version_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `minimum_version`<sup>Required</sup> <a name="minimum_version" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```python
minimum_version: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]

---


### AccessContextManagerAccessLevelConditionDevicePolicyOutputReference <a name="AccessContextManagerAccessLevelConditionDevicePolicyOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level_condition

accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints">put_os_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">reset_allowed_device_management_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedEncryptionStatuses">reset_allowed_encryption_statuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetOsConstraints">reset_os_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireAdminApproval">reset_require_admin_approval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireCorpOwned">reset_require_corp_owned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireScreenLock">reset_require_screen_lock</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_os_constraints` <a name="put_os_constraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints"></a>

```python
def put_os_constraints(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]

---

##### `reset_allowed_device_management_levels` <a name="reset_allowed_device_management_levels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```python
def reset_allowed_device_management_levels() -> None
```

##### `reset_allowed_encryption_statuses` <a name="reset_allowed_encryption_statuses" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```python
def reset_allowed_encryption_statuses() -> None
```

##### `reset_os_constraints` <a name="reset_os_constraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetOsConstraints"></a>

```python
def reset_os_constraints() -> None
```

##### `reset_require_admin_approval` <a name="reset_require_admin_approval" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```python
def reset_require_admin_approval() -> None
```

##### `reset_require_corp_owned` <a name="reset_require_corp_owned" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```python
def reset_require_corp_owned() -> None
```

##### `reset_require_screen_lock` <a name="reset_require_screen_lock" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireScreenLock"></a>

```python
def reset_require_screen_lock() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraints">os_constraints</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">allowed_device_management_levels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">allowed_encryption_statuses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraintsInput">os_constraints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApprovalInput">require_admin_approval_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwnedInput">require_corp_owned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLockInput">require_screen_lock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevels">allowed_device_management_levels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatuses">allowed_encryption_statuses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApproval">require_admin_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwned">require_corp_owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLock">require_screen_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `os_constraints`<sup>Required</sup> <a name="os_constraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraints"></a>

```python
os_constraints: AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList</a>

---

##### `allowed_device_management_levels_input`<sup>Optional</sup> <a name="allowed_device_management_levels_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```python
allowed_device_management_levels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_encryption_statuses_input`<sup>Optional</sup> <a name="allowed_encryption_statuses_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```python
allowed_encryption_statuses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os_constraints_input`<sup>Optional</sup> <a name="os_constraints_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraintsInput"></a>

```python
os_constraints_input: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]

---

##### `require_admin_approval_input`<sup>Optional</sup> <a name="require_admin_approval_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```python
require_admin_approval_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_corp_owned_input`<sup>Optional</sup> <a name="require_corp_owned_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```python
require_corp_owned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_screen_lock_input`<sup>Optional</sup> <a name="require_screen_lock_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```python
require_screen_lock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_device_management_levels`<sup>Required</sup> <a name="allowed_device_management_levels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```python
allowed_device_management_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_encryption_statuses`<sup>Required</sup> <a name="allowed_encryption_statuses" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```python
allowed_encryption_statuses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_admin_approval`<sup>Required</sup> <a name="require_admin_approval" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApproval"></a>

```python
require_admin_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_corp_owned`<sup>Required</sup> <a name="require_corp_owned" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwned"></a>

```python
require_corp_owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_screen_lock`<sup>Required</sup> <a name="require_screen_lock" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLock"></a>

```python
require_screen_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerAccessLevelConditionDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a>

---


### AccessContextManagerAccessLevelConditionTimeoutsOutputReference <a name="AccessContextManagerAccessLevelConditionTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level_condition

accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessContextManagerAccessLevelConditionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a>]

---



