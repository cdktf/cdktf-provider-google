# `dnsResponsePolicy` Submodule <a name="`dnsResponsePolicy` Submodule" id="@cdktf/provider-google.dnsResponsePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsResponsePolicy <a name="DnsResponsePolicy" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy google_dns_response_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  response_policy_name: str,
  description: str = None,
  gke_clusters: typing.Union[IResolvable, typing.List[DnsResponsePolicyGkeClusters]] = None,
  id: str = None,
  networks: typing.Union[IResolvable, typing.List[DnsResponsePolicyNetworks]] = None,
  project: str = None,
  timeouts: DnsResponsePolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.responsePolicyName">response_policy_name</a></code> | <code>str</code> | The user assigned name for this Response Policy, such as 'myresponsepolicy'. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the response policy, such as 'My new response policy'. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.gkeClusters">gke_clusters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>]]</code> | gke_clusters block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#id DnsResponsePolicy#id}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#project DnsResponsePolicy#project}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `response_policy_name`<sup>Required</sup> <a name="response_policy_name" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.responsePolicyName"></a>

- *Type:* str

The user assigned name for this Response Policy, such as 'myresponsepolicy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#response_policy_name DnsResponsePolicy#response_policy_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.description"></a>

- *Type:* str

The description of the response policy, such as 'My new response policy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#description DnsResponsePolicy#description}

---

##### `gke_clusters`<sup>Optional</sup> <a name="gke_clusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.gkeClusters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>]]

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#gke_clusters DnsResponsePolicy#gke_clusters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#id DnsResponsePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.networks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#networks DnsResponsePolicy#networks}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#project DnsResponsePolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#timeouts DnsResponsePolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putGkeClusters">put_gke_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putNetworks">put_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetGkeClusters">reset_gke_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetNetworks">reset_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gke_clusters` <a name="put_gke_clusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putGkeClusters"></a>

```python
def put_gke_clusters(
  value: typing.Union[IResolvable, typing.List[DnsResponsePolicyGkeClusters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putGkeClusters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>]]

---

##### `put_networks` <a name="put_networks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putNetworks"></a>

```python
def put_networks(
  value: typing.Union[IResolvable, typing.List[DnsResponsePolicyNetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#create DnsResponsePolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#delete DnsResponsePolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#update DnsResponsePolicy#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_gke_clusters` <a name="reset_gke_clusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetGkeClusters"></a>

```python
def reset_gke_clusters() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_networks` <a name="reset_networks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetNetworks"></a>

```python
def reset_networks() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DnsResponsePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DnsResponsePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DnsResponsePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DnsResponsePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsResponsePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClusters">gke_clusters</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList">DnsResponsePolicyGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList">DnsResponsePolicyNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference">DnsResponsePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClustersInput">gke_clusters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networksInput">networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyNameInput">response_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyName">response_policy_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gke_clusters`<sup>Required</sup> <a name="gke_clusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClusters"></a>

```python
gke_clusters: DnsResponsePolicyGkeClustersList
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList">DnsResponsePolicyGkeClustersList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networks"></a>

```python
networks: DnsResponsePolicyNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList">DnsResponsePolicyNetworksList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeouts"></a>

```python
timeouts: DnsResponsePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference">DnsResponsePolicyTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gke_clusters_input`<sup>Optional</sup> <a name="gke_clusters_input" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClustersInput"></a>

```python
gke_clusters_input: typing.Union[IResolvable, typing.List[DnsResponsePolicyGkeClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `networks_input`<sup>Optional</sup> <a name="networks_input" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networksInput"></a>

```python
networks_input: typing.Union[IResolvable, typing.List[DnsResponsePolicyNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>]]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `response_policy_name_input`<sup>Optional</sup> <a name="response_policy_name_input" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyNameInput"></a>

```python
response_policy_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DnsResponsePolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `response_policy_name`<sup>Required</sup> <a name="response_policy_name" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyName"></a>

```python
response_policy_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DnsResponsePolicyConfig <a name="DnsResponsePolicyConfig" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  response_policy_name: str,
  description: str = None,
  gke_clusters: typing.Union[IResolvable, typing.List[DnsResponsePolicyGkeClusters]] = None,
  id: str = None,
  networks: typing.Union[IResolvable, typing.List[DnsResponsePolicyNetworks]] = None,
  project: str = None,
  timeouts: DnsResponsePolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.responsePolicyName">response_policy_name</a></code> | <code>str</code> | The user assigned name for this Response Policy, such as 'myresponsepolicy'. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.description">description</a></code> | <code>str</code> | The description of the response policy, such as 'My new response policy'. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.gkeClusters">gke_clusters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>]]</code> | gke_clusters block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#id DnsResponsePolicy#id}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#project DnsResponsePolicy#project}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `response_policy_name`<sup>Required</sup> <a name="response_policy_name" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.responsePolicyName"></a>

```python
response_policy_name: str
```

- *Type:* str

The user assigned name for this Response Policy, such as 'myresponsepolicy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#response_policy_name DnsResponsePolicy#response_policy_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the response policy, such as 'My new response policy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#description DnsResponsePolicy#description}

---

##### `gke_clusters`<sup>Optional</sup> <a name="gke_clusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.gkeClusters"></a>

```python
gke_clusters: typing.Union[IResolvable, typing.List[DnsResponsePolicyGkeClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>]]

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#gke_clusters DnsResponsePolicy#gke_clusters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#id DnsResponsePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.networks"></a>

```python
networks: typing.Union[IResolvable, typing.List[DnsResponsePolicyNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#networks DnsResponsePolicy#networks}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#project DnsResponsePolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.timeouts"></a>

```python
timeouts: DnsResponsePolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#timeouts DnsResponsePolicy#timeouts}

---

### DnsResponsePolicyGkeClusters <a name="DnsResponsePolicyGkeClusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicyGkeClusters(
  gke_cluster_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters.property.gkeClusterName">gke_cluster_name</a></code> | <code>str</code> | The resource name of the cluster to bind this ManagedZone to. |

---

##### `gke_cluster_name`<sup>Required</sup> <a name="gke_cluster_name" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters.property.gkeClusterName"></a>

```python
gke_cluster_name: str
```

- *Type:* str

The resource name of the cluster to bind this ManagedZone to.

This should be specified in the format like
'projects/* /locations/* /clusters/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#gke_cluster_name DnsResponsePolicy#gke_cluster_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DnsResponsePolicyNetworks <a name="DnsResponsePolicyNetworks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicyNetworks(
  network_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks.property.networkUrl">network_url</a></code> | <code>str</code> | The fully qualified URL of the VPC network to bind to. This should be formatted like 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'. |

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The fully qualified URL of the VPC network to bind to. This should be formatted like 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#network_url DnsResponsePolicy#network_url}

---

### DnsResponsePolicyTimeouts <a name="DnsResponsePolicyTimeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#create DnsResponsePolicy#create}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#delete DnsResponsePolicy#delete}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#update DnsResponsePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#create DnsResponsePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#delete DnsResponsePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/dns_response_policy#update DnsResponsePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsResponsePolicyGkeClustersList <a name="DnsResponsePolicyGkeClustersList" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicyGkeClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsResponsePolicyGkeClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsResponsePolicyGkeClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>]]

---


### DnsResponsePolicyGkeClustersOutputReference <a name="DnsResponsePolicyGkeClustersOutputReference" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterNameInput">gke_cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterName">gke_cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gke_cluster_name_input`<sup>Optional</sup> <a name="gke_cluster_name_input" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterNameInput"></a>

```python
gke_cluster_name_input: str
```

- *Type:* str

---

##### `gke_cluster_name`<sup>Required</sup> <a name="gke_cluster_name" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterName"></a>

```python
gke_cluster_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsResponsePolicyGkeClusters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>]

---


### DnsResponsePolicyNetworksList <a name="DnsResponsePolicyNetworksList" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicyNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsResponsePolicyNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsResponsePolicyNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>]]

---


### DnsResponsePolicyNetworksOutputReference <a name="DnsResponsePolicyNetworksOutputReference" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsResponsePolicyNetworks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>]

---


### DnsResponsePolicyTimeoutsOutputReference <a name="DnsResponsePolicyTimeoutsOutputReference" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_response_policy

dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsResponsePolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>]

---



