# `dnsRecordSet` Submodule <a name="`dnsRecordSet` Submodule" id="@cdktf/provider-google.dnsRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsRecordSet <a name="DnsRecordSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set google_dns_record_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_zone: str,
  name: str,
  type: str,
  id: str = None,
  project: str = None,
  routing_policy: DnsRecordSetRoutingPolicy = None,
  rrdatas: typing.List[str] = None,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.managedZone">managed_zone</a></code> | <code>str</code> | The name of the zone in which this record set will reside. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.name">name</a></code> | <code>str</code> | The DNS name this record set will apply to. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.type">type</a></code> | <code>str</code> | The DNS record set type. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#id DnsRecordSet#id}. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.routingPolicy">routing_policy</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a></code> | routing_policy block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | The string data for the records in this record set whose meaning depends on the DNS type. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The time-to-live of this record set (seconds). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_zone`<sup>Required</sup> <a name="managed_zone" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.managedZone"></a>

- *Type:* str

The name of the zone in which this record set will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#managed_zone DnsRecordSet#managed_zone}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.name"></a>

- *Type:* str

The DNS name this record set will apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#name DnsRecordSet#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.type"></a>

- *Type:* str

The DNS record set type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#type DnsRecordSet#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#id DnsRecordSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#project DnsRecordSet#project}

---

##### `routing_policy`<sup>Optional</sup> <a name="routing_policy" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.routingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a>

routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#routing_policy DnsRecordSet#routing_policy}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.rrdatas"></a>

- *Type:* typing.List[str]

The string data for the records in this record set whose meaning depends on the DNS type.

For TXT record, if the string data contains spaces, add surrounding " if you don't want your string to get split on spaces. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add "" inside the Terraform configuration string (e.g. "first255characters""morecharacters").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

The time-to-live of this record set (seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#ttl DnsRecordSet#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.putRoutingPolicy">put_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetRoutingPolicy">reset_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetRrdatas">reset_rrdatas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_routing_policy` <a name="put_routing_policy" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.putRoutingPolicy"></a>

```python
def put_routing_policy(
  enable_geo_fencing: typing.Union[bool, IResolvable] = None,
  geo: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyGeo]] = None,
  primary_backup: DnsRecordSetRoutingPolicyPrimaryBackup = None,
  wrr: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyWrr]] = None
) -> None
```

###### `enable_geo_fencing`<sup>Optional</sup> <a name="enable_geo_fencing" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.putRoutingPolicy.parameter.enableGeoFencing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to enable fencing for geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#enable_geo_fencing DnsRecordSet#enable_geo_fencing}

---

###### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.putRoutingPolicy.parameter.geo"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo">DnsRecordSetRoutingPolicyGeo</a>]]

geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#geo DnsRecordSet#geo}

---

###### `primary_backup`<sup>Optional</sup> <a name="primary_backup" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.putRoutingPolicy.parameter.primaryBackup"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a>

primary_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#primary_backup DnsRecordSet#primary_backup}

---

###### `wrr`<sup>Optional</sup> <a name="wrr" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.putRoutingPolicy.parameter.wrr"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr">DnsRecordSetRoutingPolicyWrr</a>]]

wrr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#wrr DnsRecordSet#wrr}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_routing_policy` <a name="reset_routing_policy" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetRoutingPolicy"></a>

```python
def reset_routing_policy() -> None
```

##### `reset_rrdatas` <a name="reset_rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetRrdatas"></a>

```python
def reset_rrdatas() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DnsRecordSet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DnsRecordSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DnsRecordSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DnsRecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsRecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.routingPolicy">routing_policy</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference">DnsRecordSetRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.managedZoneInput">managed_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.routingPolicyInput">routing_policy_input</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.rrdatasInput">rrdatas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.managedZone">managed_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `routing_policy`<sup>Required</sup> <a name="routing_policy" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.routingPolicy"></a>

```python
routing_policy: DnsRecordSetRoutingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference">DnsRecordSetRoutingPolicyOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_zone_input`<sup>Optional</sup> <a name="managed_zone_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.managedZoneInput"></a>

```python
managed_zone_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `routing_policy_input`<sup>Optional</sup> <a name="routing_policy_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.routingPolicyInput"></a>

```python
routing_policy_input: DnsRecordSetRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a>

---

##### `rrdatas_input`<sup>Optional</sup> <a name="rrdatas_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.rrdatasInput"></a>

```python
rrdatas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_zone`<sup>Required</sup> <a name="managed_zone" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.managedZone"></a>

```python
managed_zone: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DnsRecordSetConfig <a name="DnsRecordSetConfig" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_zone: str,
  name: str,
  type: str,
  id: str = None,
  project: str = None,
  routing_policy: DnsRecordSetRoutingPolicy = None,
  rrdatas: typing.List[str] = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.managedZone">managed_zone</a></code> | <code>str</code> | The name of the zone in which this record set will reside. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.name">name</a></code> | <code>str</code> | The DNS name this record set will apply to. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.type">type</a></code> | <code>str</code> | The DNS record set type. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#id DnsRecordSet#id}. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.routingPolicy">routing_policy</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a></code> | routing_policy block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | The string data for the records in this record set whose meaning depends on the DNS type. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The time-to-live of this record set (seconds). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_zone`<sup>Required</sup> <a name="managed_zone" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.managedZone"></a>

```python
managed_zone: str
```

- *Type:* str

The name of the zone in which this record set will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#managed_zone DnsRecordSet#managed_zone}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The DNS name this record set will apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#name DnsRecordSet#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The DNS record set type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#type DnsRecordSet#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#id DnsRecordSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#project DnsRecordSet#project}

---

##### `routing_policy`<sup>Optional</sup> <a name="routing_policy" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.routingPolicy"></a>

```python
routing_policy: DnsRecordSetRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a>

routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#routing_policy DnsRecordSet#routing_policy}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

The string data for the records in this record set whose meaning depends on the DNS type.

For TXT record, if the string data contains spaces, add surrounding " if you don't want your string to get split on spaces. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add "" inside the Terraform configuration string (e.g. "first255characters""morecharacters").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time-to-live of this record set (seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#ttl DnsRecordSet#ttl}

---

### DnsRecordSetRoutingPolicy <a name="DnsRecordSetRoutingPolicy" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicy(
  enable_geo_fencing: typing.Union[bool, IResolvable] = None,
  geo: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyGeo]] = None,
  primary_backup: DnsRecordSetRoutingPolicyPrimaryBackup = None,
  wrr: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyWrr]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.enableGeoFencing">enable_geo_fencing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to enable fencing for geo queries. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.geo">geo</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo">DnsRecordSetRoutingPolicyGeo</a>]]</code> | geo block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.primaryBackup">primary_backup</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a></code> | primary_backup block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.wrr">wrr</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr">DnsRecordSetRoutingPolicyWrr</a>]]</code> | wrr block. |

---

##### `enable_geo_fencing`<sup>Optional</sup> <a name="enable_geo_fencing" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.enableGeoFencing"></a>

```python
enable_geo_fencing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to enable fencing for geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#enable_geo_fencing DnsRecordSet#enable_geo_fencing}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.geo"></a>

```python
geo: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyGeo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo">DnsRecordSetRoutingPolicyGeo</a>]]

geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#geo DnsRecordSet#geo}

---

##### `primary_backup`<sup>Optional</sup> <a name="primary_backup" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.primaryBackup"></a>

```python
primary_backup: DnsRecordSetRoutingPolicyPrimaryBackup
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a>

primary_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#primary_backup DnsRecordSet#primary_backup}

---

##### `wrr`<sup>Optional</sup> <a name="wrr" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.wrr"></a>

```python
wrr: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyWrr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr">DnsRecordSetRoutingPolicyWrr</a>]]

wrr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#wrr DnsRecordSet#wrr}

---

### DnsRecordSetRoutingPolicyGeo <a name="DnsRecordSetRoutingPolicyGeo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyGeo(
  location: str,
  health_checked_targets: DnsRecordSetRoutingPolicyGeoHealthCheckedTargets = None,
  rrdatas: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.property.location">location</a></code> | <code>str</code> | The location name defined in Google Cloud. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.property.healthCheckedTargets">health_checked_targets</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.property.location"></a>

```python
location: str
```

- *Type:* str

The location name defined in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#location DnsRecordSet#location}

---

##### `health_checked_targets`<sup>Optional</sup> <a name="health_checked_targets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.property.healthCheckedTargets"></a>

```python
health_checked_targets: DnsRecordSetRoutingPolicyGeoHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#health_checked_targets DnsRecordSet#health_checked_targets}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}.

---

### DnsRecordSetRoutingPolicyGeoHealthCheckedTargets <a name="DnsRecordSetRoutingPolicyGeoHealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets(
  internal_load_balancers: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.internalLoadBalancers">internal_load_balancers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | internal_load_balancers block. |

---

##### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.internalLoadBalancers"></a>

```python
internal_load_balancers: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}

---

### DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers <a name="DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers(
  ip_address: str,
  ip_protocol: str,
  load_balancer_type: str,
  network_url: str,
  port: str,
  project: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">ip_address</a></code> | <code>str</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">network_url</a></code> | <code>str</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.port">port</a></code> | <code>str</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.project">project</a></code> | <code>str</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.region">region</a></code> | <code>str</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#ip_address DnsRecordSet#ip_address}

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#ip_protocol DnsRecordSet#ip_protocol}

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#load_balancer_type DnsRecordSet#load_balancer_type}

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#network_url DnsRecordSet#network_url}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```python
port: str
```

- *Type:* str

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#port DnsRecordSet#port}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#project DnsRecordSet#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#region DnsRecordSet#region}

---

### DnsRecordSetRoutingPolicyPrimaryBackup <a name="DnsRecordSetRoutingPolicyPrimaryBackup" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup(
  backup_geo: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]],
  primary: DnsRecordSetRoutingPolicyPrimaryBackupPrimary,
  enable_geo_fencing_for_backups: typing.Union[bool, IResolvable] = None,
  trickle_ratio: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.backupGeo">backup_geo</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]</code> | backup_geo block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.primary">primary</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | primary block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.enableGeoFencingForBackups">enable_geo_fencing_for_backups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to enable fencing for backup geo queries. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.trickleRatio">trickle_ratio</a></code> | <code>typing.Union[int, float]</code> | Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy. |

---

##### `backup_geo`<sup>Required</sup> <a name="backup_geo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.backupGeo"></a>

```python
backup_geo: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]

backup_geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#backup_geo DnsRecordSet#backup_geo}

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.primary"></a>

```python
primary: DnsRecordSetRoutingPolicyPrimaryBackupPrimary
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

primary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#primary DnsRecordSet#primary}

---

##### `enable_geo_fencing_for_backups`<sup>Optional</sup> <a name="enable_geo_fencing_for_backups" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.enableGeoFencingForBackups"></a>

```python
enable_geo_fencing_for_backups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to enable fencing for backup geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#enable_geo_fencing_for_backups DnsRecordSet#enable_geo_fencing_for_backups}

---

##### `trickle_ratio`<sup>Optional</sup> <a name="trickle_ratio" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.trickleRatio"></a>

```python
trickle_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#trickle_ratio DnsRecordSet#trickle_ratio}

---

### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo(
  location: str,
  health_checked_targets: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets = None,
  rrdatas: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.location">location</a></code> | <code>str</code> | The location name defined in Google Cloud. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.healthCheckedTargets">health_checked_targets</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.location"></a>

```python
location: str
```

- *Type:* str

The location name defined in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#location DnsRecordSet#location}

---

##### `health_checked_targets`<sup>Optional</sup> <a name="health_checked_targets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.healthCheckedTargets"></a>

```python
health_checked_targets: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#health_checked_targets DnsRecordSet#health_checked_targets}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}.

---

### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets(
  internal_load_balancers: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.internalLoadBalancers">internal_load_balancers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | internal_load_balancers block. |

---

##### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.internalLoadBalancers"></a>

```python
internal_load_balancers: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}

---

### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers(
  ip_address: str,
  ip_protocol: str,
  load_balancer_type: str,
  network_url: str,
  port: str,
  project: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">ip_address</a></code> | <code>str</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">network_url</a></code> | <code>str</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.port">port</a></code> | <code>str</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.project">project</a></code> | <code>str</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.region">region</a></code> | <code>str</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#ip_address DnsRecordSet#ip_address}

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#ip_protocol DnsRecordSet#ip_protocol}

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#load_balancer_type DnsRecordSet#load_balancer_type}

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#network_url DnsRecordSet#network_url}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```python
port: str
```

- *Type:* str

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#port DnsRecordSet#port}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#project DnsRecordSet#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#region DnsRecordSet#region}

---

### DnsRecordSetRoutingPolicyPrimaryBackupPrimary <a name="DnsRecordSetRoutingPolicyPrimaryBackupPrimary" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary(
  internal_load_balancers: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.internalLoadBalancers">internal_load_balancers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]</code> | internal_load_balancers block. |

---

##### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.internalLoadBalancers"></a>

```python
internal_load_balancers: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}

---

### DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers <a name="DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers(
  ip_address: str,
  ip_protocol: str,
  load_balancer_type: str,
  network_url: str,
  port: str,
  project: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipAddress">ip_address</a></code> | <code>str</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.networkUrl">network_url</a></code> | <code>str</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.port">port</a></code> | <code>str</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.project">project</a></code> | <code>str</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.region">region</a></code> | <code>str</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#ip_address DnsRecordSet#ip_address}

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#ip_protocol DnsRecordSet#ip_protocol}

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#load_balancer_type DnsRecordSet#load_balancer_type}

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#network_url DnsRecordSet#network_url}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.port"></a>

```python
port: str
```

- *Type:* str

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#port DnsRecordSet#port}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#project DnsRecordSet#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#region DnsRecordSet#region}

---

### DnsRecordSetRoutingPolicyWrr <a name="DnsRecordSetRoutingPolicyWrr" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyWrr(
  weight: typing.Union[int, float],
  health_checked_targets: DnsRecordSetRoutingPolicyWrrHealthCheckedTargets = None,
  rrdatas: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The ratio of traffic routed to the target. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.property.healthCheckedTargets">health_checked_targets</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets">DnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}. |

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ratio of traffic routed to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#weight DnsRecordSet#weight}

---

##### `health_checked_targets`<sup>Optional</sup> <a name="health_checked_targets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.property.healthCheckedTargets"></a>

```python
health_checked_targets: DnsRecordSetRoutingPolicyWrrHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets">DnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#health_checked_targets DnsRecordSet#health_checked_targets}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}.

---

### DnsRecordSetRoutingPolicyWrrHealthCheckedTargets <a name="DnsRecordSetRoutingPolicyWrrHealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets(
  internal_load_balancers: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.internalLoadBalancers">internal_load_balancers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | internal_load_balancers block. |

---

##### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.internalLoadBalancers"></a>

```python
internal_load_balancers: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}

---

### DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers <a name="DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers(
  ip_address: str,
  ip_protocol: str,
  load_balancer_type: str,
  network_url: str,
  port: str,
  project: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">ip_address</a></code> | <code>str</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">network_url</a></code> | <code>str</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.port">port</a></code> | <code>str</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.project">project</a></code> | <code>str</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.region">region</a></code> | <code>str</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#ip_address DnsRecordSet#ip_address}

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#ip_protocol DnsRecordSet#ip_protocol}

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#load_balancer_type DnsRecordSet#load_balancer_type}

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#network_url DnsRecordSet#network_url}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```python
port: str
```

- *Type:* str

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#port DnsRecordSet#port}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#project DnsRecordSet#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#region DnsRecordSet#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList <a name="DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

---


### DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">load_balancer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `load_balancer_type_input`<sup>Optional</sup> <a name="load_balancer_type_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```python
load_balancer_type_input: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]

---


### DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference <a name="DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers">put_internal_load_balancers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internal_load_balancers` <a name="put_internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```python
def put_internal_load_balancers(
  value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers">internal_load_balancers</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">internal_load_balancers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```python
internal_load_balancers: DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `internal_load_balancers_input`<sup>Optional</sup> <a name="internal_load_balancers_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```python
internal_load_balancers_input: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DnsRecordSetRoutingPolicyGeoHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

---


### DnsRecordSetRoutingPolicyGeoList <a name="DnsRecordSetRoutingPolicyGeoList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyGeoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsRecordSetRoutingPolicyGeoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo">DnsRecordSetRoutingPolicyGeo</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyGeo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo">DnsRecordSetRoutingPolicyGeo</a>]]

---


### DnsRecordSetRoutingPolicyGeoOutputReference <a name="DnsRecordSetRoutingPolicyGeoOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets">put_health_checked_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resetHealthCheckedTargets">reset_health_checked_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resetRrdatas">reset_rrdatas</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_health_checked_targets` <a name="put_health_checked_targets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets"></a>

```python
def put_health_checked_targets(
  internal_load_balancers: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]]
) -> None
```

###### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets.parameter.internalLoadBalancers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}

---

##### `reset_health_checked_targets` <a name="reset_health_checked_targets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resetHealthCheckedTargets"></a>

```python
def reset_health_checked_targets() -> None
```

##### `reset_rrdatas` <a name="reset_rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resetRrdatas"></a>

```python
def reset_rrdatas() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargets">health_checked_targets</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargetsInput">health_checked_targets_input</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatasInput">rrdatas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo">DnsRecordSetRoutingPolicyGeo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_checked_targets`<sup>Required</sup> <a name="health_checked_targets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargets"></a>

```python
health_checked_targets: DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference</a>

---

##### `health_checked_targets_input`<sup>Optional</sup> <a name="health_checked_targets_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargetsInput"></a>

```python
health_checked_targets_input: DnsRecordSetRoutingPolicyGeoHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `rrdatas_input`<sup>Optional</sup> <a name="rrdatas_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatasInput"></a>

```python
rrdatas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsRecordSetRoutingPolicyGeo]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo">DnsRecordSetRoutingPolicyGeo</a>]

---


### DnsRecordSetRoutingPolicyOutputReference <a name="DnsRecordSetRoutingPolicyOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putGeo">put_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup">put_primary_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putWrr">put_wrr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetEnableGeoFencing">reset_enable_geo_fencing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetGeo">reset_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetPrimaryBackup">reset_primary_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetWrr">reset_wrr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_geo` <a name="put_geo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putGeo"></a>

```python
def put_geo(
  value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyGeo]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putGeo.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo">DnsRecordSetRoutingPolicyGeo</a>]]

---

##### `put_primary_backup` <a name="put_primary_backup" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup"></a>

```python
def put_primary_backup(
  backup_geo: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]],
  primary: DnsRecordSetRoutingPolicyPrimaryBackupPrimary,
  enable_geo_fencing_for_backups: typing.Union[bool, IResolvable] = None,
  trickle_ratio: typing.Union[int, float] = None
) -> None
```

###### `backup_geo`<sup>Required</sup> <a name="backup_geo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup.parameter.backupGeo"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]

backup_geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#backup_geo DnsRecordSet#backup_geo}

---

###### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup.parameter.primary"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

primary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#primary DnsRecordSet#primary}

---

###### `enable_geo_fencing_for_backups`<sup>Optional</sup> <a name="enable_geo_fencing_for_backups" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup.parameter.enableGeoFencingForBackups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to enable fencing for backup geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#enable_geo_fencing_for_backups DnsRecordSet#enable_geo_fencing_for_backups}

---

###### `trickle_ratio`<sup>Optional</sup> <a name="trickle_ratio" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup.parameter.trickleRatio"></a>

- *Type:* typing.Union[int, float]

Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#trickle_ratio DnsRecordSet#trickle_ratio}

---

##### `put_wrr` <a name="put_wrr" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putWrr"></a>

```python
def put_wrr(
  value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyWrr]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putWrr.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr">DnsRecordSetRoutingPolicyWrr</a>]]

---

##### `reset_enable_geo_fencing` <a name="reset_enable_geo_fencing" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetEnableGeoFencing"></a>

```python
def reset_enable_geo_fencing() -> None
```

##### `reset_geo` <a name="reset_geo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetGeo"></a>

```python
def reset_geo() -> None
```

##### `reset_primary_backup` <a name="reset_primary_backup" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetPrimaryBackup"></a>

```python
def reset_primary_backup() -> None
```

##### `reset_wrr` <a name="reset_wrr" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetWrr"></a>

```python
def reset_wrr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.geo">geo</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList">DnsRecordSetRoutingPolicyGeoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.primaryBackup">primary_backup</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference">DnsRecordSetRoutingPolicyPrimaryBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.wrr">wrr</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList">DnsRecordSetRoutingPolicyWrrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencingInput">enable_geo_fencing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.geoInput">geo_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo">DnsRecordSetRoutingPolicyGeo</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.primaryBackupInput">primary_backup_input</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.wrrInput">wrr_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr">DnsRecordSetRoutingPolicyWrr</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencing">enable_geo_fencing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.geo"></a>

```python
geo: DnsRecordSetRoutingPolicyGeoList
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList">DnsRecordSetRoutingPolicyGeoList</a>

---

##### `primary_backup`<sup>Required</sup> <a name="primary_backup" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.primaryBackup"></a>

```python
primary_backup: DnsRecordSetRoutingPolicyPrimaryBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference">DnsRecordSetRoutingPolicyPrimaryBackupOutputReference</a>

---

##### `wrr`<sup>Required</sup> <a name="wrr" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.wrr"></a>

```python
wrr: DnsRecordSetRoutingPolicyWrrList
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList">DnsRecordSetRoutingPolicyWrrList</a>

---

##### `enable_geo_fencing_input`<sup>Optional</sup> <a name="enable_geo_fencing_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencingInput"></a>

```python
enable_geo_fencing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geo_input`<sup>Optional</sup> <a name="geo_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.geoInput"></a>

```python
geo_input: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyGeo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo">DnsRecordSetRoutingPolicyGeo</a>]]

---

##### `primary_backup_input`<sup>Optional</sup> <a name="primary_backup_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.primaryBackupInput"></a>

```python
primary_backup_input: DnsRecordSetRoutingPolicyPrimaryBackup
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a>

---

##### `wrr_input`<sup>Optional</sup> <a name="wrr_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.wrrInput"></a>

```python
wrr_input: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyWrr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr">DnsRecordSetRoutingPolicyWrr</a>]]

---

##### `enable_geo_fencing`<sup>Required</sup> <a name="enable_geo_fencing" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencing"></a>

```python
enable_geo_fencing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DnsRecordSetRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a>

---


### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

---


### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">load_balancer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `load_balancer_type_input`<sup>Optional</sup> <a name="load_balancer_type_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```python
load_balancer_type_input: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]

---


### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers">put_internal_load_balancers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internal_load_balancers` <a name="put_internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```python
def put_internal_load_balancers(
  value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers">internal_load_balancers</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">internal_load_balancers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```python
internal_load_balancers: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `internal_load_balancers_input`<sup>Optional</sup> <a name="internal_load_balancers_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```python
internal_load_balancers_input: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

---


### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]

---


### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets">put_health_checked_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetHealthCheckedTargets">reset_health_checked_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetRrdatas">reset_rrdatas</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_health_checked_targets` <a name="put_health_checked_targets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets"></a>

```python
def put_health_checked_targets(
  internal_load_balancers: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]]
) -> None
```

###### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets.parameter.internalLoadBalancers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}

---

##### `reset_health_checked_targets` <a name="reset_health_checked_targets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetHealthCheckedTargets"></a>

```python
def reset_health_checked_targets() -> None
```

##### `reset_rrdatas` <a name="reset_rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetRrdatas"></a>

```python
def reset_rrdatas() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargets">health_checked_targets</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargetsInput">health_checked_targets_input</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatasInput">rrdatas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_checked_targets`<sup>Required</sup> <a name="health_checked_targets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargets"></a>

```python
health_checked_targets: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference</a>

---

##### `health_checked_targets_input`<sup>Optional</sup> <a name="health_checked_targets_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargetsInput"></a>

```python
health_checked_targets_input: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `rrdatas_input`<sup>Optional</sup> <a name="rrdatas_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatasInput"></a>

```python
rrdatas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]

---


### DnsRecordSetRoutingPolicyPrimaryBackupOutputReference <a name="DnsRecordSetRoutingPolicyPrimaryBackupOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo">put_backup_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary">put_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetEnableGeoFencingForBackups">reset_enable_geo_fencing_for_backups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetTrickleRatio">reset_trickle_ratio</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backup_geo` <a name="put_backup_geo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo"></a>

```python
def put_backup_geo(
  value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]

---

##### `put_primary` <a name="put_primary" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary"></a>

```python
def put_primary(
  internal_load_balancers: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]]
) -> None
```

###### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary.parameter.internalLoadBalancers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}

---

##### `reset_enable_geo_fencing_for_backups` <a name="reset_enable_geo_fencing_for_backups" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetEnableGeoFencingForBackups"></a>

```python
def reset_enable_geo_fencing_for_backups() -> None
```

##### `reset_trickle_ratio` <a name="reset_trickle_ratio" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetTrickleRatio"></a>

```python
def reset_trickle_ratio() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeo">backup_geo</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeoInput">backup_geo_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackupsInput">enable_geo_fencing_for_backups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primaryInput">primary_input</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatioInput">trickle_ratio_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackups">enable_geo_fencing_for_backups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatio">trickle_ratio</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_geo`<sup>Required</sup> <a name="backup_geo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeo"></a>

```python
backup_geo: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primary"></a>

```python
primary: DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference</a>

---

##### `backup_geo_input`<sup>Optional</sup> <a name="backup_geo_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeoInput"></a>

```python
backup_geo_input: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]

---

##### `enable_geo_fencing_for_backups_input`<sup>Optional</sup> <a name="enable_geo_fencing_for_backups_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackupsInput"></a>

```python
enable_geo_fencing_for_backups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primaryInput"></a>

```python
primary_input: DnsRecordSetRoutingPolicyPrimaryBackupPrimary
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

---

##### `trickle_ratio_input`<sup>Optional</sup> <a name="trickle_ratio_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatioInput"></a>

```python
trickle_ratio_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_geo_fencing_for_backups`<sup>Required</sup> <a name="enable_geo_fencing_for_backups" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackups"></a>

```python
enable_geo_fencing_for_backups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `trickle_ratio`<sup>Required</sup> <a name="trickle_ratio" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatio"></a>

```python
trickle_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.internalValue"></a>

```python
internal_value: DnsRecordSetRoutingPolicyPrimaryBackup
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a>

---


### DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList <a name="DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]

---


### DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference <a name="DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">load_balancer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `load_balancer_type_input`<sup>Optional</sup> <a name="load_balancer_type_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```python
load_balancer_type_input: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]

---


### DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference <a name="DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers">put_internal_load_balancers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internal_load_balancers` <a name="put_internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers"></a>

```python
def put_internal_load_balancers(
  value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancers">internal_load_balancers</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancersInput">internal_load_balancers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancers"></a>

```python
internal_load_balancers: DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList</a>

---

##### `internal_load_balancers_input`<sup>Optional</sup> <a name="internal_load_balancers_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancersInput"></a>

```python
internal_load_balancers_input: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalValue"></a>

```python
internal_value: DnsRecordSetRoutingPolicyPrimaryBackupPrimary
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

---


### DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList <a name="DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]

---


### DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">load_balancer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `load_balancer_type_input`<sup>Optional</sup> <a name="load_balancer_type_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```python
load_balancer_type_input: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]

---


### DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference <a name="DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers">put_internal_load_balancers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internal_load_balancers` <a name="put_internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```python
def put_internal_load_balancers(
  value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancers">internal_load_balancers</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">internal_load_balancers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets">DnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```python
internal_load_balancers: DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `internal_load_balancers_input`<sup>Optional</sup> <a name="internal_load_balancers_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```python
internal_load_balancers_input: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DnsRecordSetRoutingPolicyWrrHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets">DnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

---


### DnsRecordSetRoutingPolicyWrrList <a name="DnsRecordSetRoutingPolicyWrrList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyWrrList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsRecordSetRoutingPolicyWrrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr">DnsRecordSetRoutingPolicyWrr</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyWrr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr">DnsRecordSetRoutingPolicyWrr</a>]]

---


### DnsRecordSetRoutingPolicyWrrOutputReference <a name="DnsRecordSetRoutingPolicyWrrOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_record_set

dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets">put_health_checked_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resetHealthCheckedTargets">reset_health_checked_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resetRrdatas">reset_rrdatas</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_health_checked_targets` <a name="put_health_checked_targets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets"></a>

```python
def put_health_checked_targets(
  internal_load_balancers: typing.Union[IResolvable, typing.List[DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]]
) -> None
```

###### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets.parameter.internalLoadBalancers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}

---

##### `reset_health_checked_targets` <a name="reset_health_checked_targets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resetHealthCheckedTargets"></a>

```python
def reset_health_checked_targets() -> None
```

##### `reset_rrdatas` <a name="reset_rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resetRrdatas"></a>

```python
def reset_rrdatas() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargets">health_checked_targets</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargetsInput">health_checked_targets_input</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets">DnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatasInput">rrdatas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr">DnsRecordSetRoutingPolicyWrr</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_checked_targets`<sup>Required</sup> <a name="health_checked_targets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargets"></a>

```python
health_checked_targets: DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference</a>

---

##### `health_checked_targets_input`<sup>Optional</sup> <a name="health_checked_targets_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargetsInput"></a>

```python
health_checked_targets_input: DnsRecordSetRoutingPolicyWrrHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets">DnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

---

##### `rrdatas_input`<sup>Optional</sup> <a name="rrdatas_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatasInput"></a>

```python
rrdatas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsRecordSetRoutingPolicyWrr]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr">DnsRecordSetRoutingPolicyWrr</a>]

---



