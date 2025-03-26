# `computeServiceAttachment` Submodule <a name="`computeServiceAttachment` Submodule" id="@cdktf/provider-google.computeServiceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeServiceAttachment <a name="ComputeServiceAttachment" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment google_compute_service_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_preference: str,
  enable_proxy_protocol: typing.Union[bool, IResolvable],
  name: str,
  nat_subnets: typing.List[str],
  target_service: str,
  consumer_accept_lists: typing.Union[IResolvable, typing.List[ComputeServiceAttachmentConsumerAcceptLists]] = None,
  consumer_reject_lists: typing.List[str] = None,
  description: str = None,
  domain_names: typing.List[str] = None,
  id: str = None,
  project: str = None,
  propagated_connection_limit: typing.Union[int, float] = None,
  reconcile_connections: typing.Union[bool, IResolvable] = None,
  region: str = None,
  timeouts: ComputeServiceAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.connectionPreference">connection_preference</a></code> | <code>str</code> | The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL". |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.enableProxyProtocol">enable_proxy_protocol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.natSubnets">nat_subnets</a></code> | <code>typing.List[str]</code> | An array of subnets that is provided for NAT in this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.targetService">target_service</a></code> | <code>str</code> | The URL of a service serving the endpoint identified by this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.consumerAcceptLists">consumer_accept_lists</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>]]</code> | consumer_accept_lists block. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.consumerRejectLists">consumer_reject_lists</a></code> | <code>typing.List[str]</code> | An array of projects that are not allowed to connect to this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.domainNames">domain_names</a></code> | <code>typing.List[str]</code> | If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#id ComputeServiceAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#project ComputeServiceAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.propagatedConnectionLimit">propagated_connection_limit</a></code> | <code>typing.Union[int, float]</code> | The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.reconcileConnections">reconcile_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.region">region</a></code> | <code>str</code> | URL of the region where the resource resides. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_preference`<sup>Required</sup> <a name="connection_preference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.connectionPreference"></a>

- *Type:* str

The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#connection_preference ComputeServiceAttachment#connection_preference}

---

##### `enable_proxy_protocol`<sup>Required</sup> <a name="enable_proxy_protocol" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.enableProxyProtocol"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#enable_proxy_protocol ComputeServiceAttachment#enable_proxy_protocol}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#name ComputeServiceAttachment#name}

---

##### `nat_subnets`<sup>Required</sup> <a name="nat_subnets" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.natSubnets"></a>

- *Type:* typing.List[str]

An array of subnets that is provided for NAT in this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#nat_subnets ComputeServiceAttachment#nat_subnets}

---

##### `target_service`<sup>Required</sup> <a name="target_service" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.targetService"></a>

- *Type:* str

The URL of a service serving the endpoint identified by this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#target_service ComputeServiceAttachment#target_service}

---

##### `consumer_accept_lists`<sup>Optional</sup> <a name="consumer_accept_lists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.consumerAcceptLists"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>]]

consumer_accept_lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#consumer_accept_lists ComputeServiceAttachment#consumer_accept_lists}

---

##### `consumer_reject_lists`<sup>Optional</sup> <a name="consumer_reject_lists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.consumerRejectLists"></a>

- *Type:* typing.List[str]

An array of projects that are not allowed to connect to this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#consumer_reject_lists ComputeServiceAttachment#consumer_reject_lists}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#description ComputeServiceAttachment#description}

---

##### `domain_names`<sup>Optional</sup> <a name="domain_names" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.domainNames"></a>

- *Type:* typing.List[str]

If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.

For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#domain_names ComputeServiceAttachment#domain_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#id ComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#project ComputeServiceAttachment#project}.

---

##### `propagated_connection_limit`<sup>Optional</sup> <a name="propagated_connection_limit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.propagatedConnectionLimit"></a>

- *Type:* typing.Union[int, float]

The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center.

This limit lets the service producer limit how many propagated Private Service Connect connections can be established to this service attachment from a single consumer.

If the connection preference of the service attachment is ACCEPT_MANUAL, the limit applies to each project or network that is listed in the consumer accept list.
If the connection preference of the service attachment is ACCEPT_AUTOMATIC, the limit applies to each project that contains a connected endpoint.

If unspecified, the default propagated connection limit is 250.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#propagated_connection_limit ComputeServiceAttachment#propagated_connection_limit}

---

##### `reconcile_connections`<sup>Optional</sup> <a name="reconcile_connections" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.reconcileConnections"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.

If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#reconcile_connections ComputeServiceAttachment#reconcile_connections}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.region"></a>

- *Type:* str

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#region ComputeServiceAttachment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#timeouts ComputeServiceAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists">put_consumer_accept_lists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerAcceptLists">reset_consumer_accept_lists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerRejectLists">reset_consumer_reject_lists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDomainNames">reset_domain_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetPropagatedConnectionLimit">reset_propagated_connection_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetReconcileConnections">reset_reconcile_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_consumer_accept_lists` <a name="put_consumer_accept_lists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists"></a>

```python
def put_consumer_accept_lists(
  value: typing.Union[IResolvable, typing.List[ComputeServiceAttachmentConsumerAcceptLists]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#create ComputeServiceAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#delete ComputeServiceAttachment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#update ComputeServiceAttachment#update}.

---

##### `reset_consumer_accept_lists` <a name="reset_consumer_accept_lists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerAcceptLists"></a>

```python
def reset_consumer_accept_lists() -> None
```

##### `reset_consumer_reject_lists` <a name="reset_consumer_reject_lists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerRejectLists"></a>

```python
def reset_consumer_reject_lists() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain_names` <a name="reset_domain_names" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDomainNames"></a>

```python
def reset_domain_names() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_propagated_connection_limit` <a name="reset_propagated_connection_limit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetPropagatedConnectionLimit"></a>

```python
def reset_propagated_connection_limit() -> None
```

##### `reset_reconcile_connections` <a name="reset_reconcile_connections" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetReconcileConnections"></a>

```python
def reset_reconcile_connections() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeServiceAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeServiceAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeServiceAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeServiceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeServiceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectedEndpoints">connected_endpoints</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList">ComputeServiceAttachmentConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptLists">consumer_accept_lists</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList">ComputeServiceAttachmentConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference">ComputeServiceAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreferenceInput">connection_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptListsInput">consumer_accept_lists_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectListsInput">consumer_reject_lists_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNamesInput">domain_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocolInput">enable_proxy_protocol_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnetsInput">nat_subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.propagatedConnectionLimitInput">propagated_connection_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnectionsInput">reconcile_connections_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetServiceInput">target_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreference">connection_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectLists">consumer_reject_lists</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNames">domain_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocol">enable_proxy_protocol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnets">nat_subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.propagatedConnectionLimit">propagated_connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnections">reconcile_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetService">target_service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connected_endpoints`<sup>Required</sup> <a name="connected_endpoints" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectedEndpoints"></a>

```python
connected_endpoints: ComputeServiceAttachmentConnectedEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList">ComputeServiceAttachmentConnectedEndpointsList</a>

---

##### `consumer_accept_lists`<sup>Required</sup> <a name="consumer_accept_lists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptLists"></a>

```python
consumer_accept_lists: ComputeServiceAttachmentConsumerAcceptListsList
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList">ComputeServiceAttachmentConsumerAcceptListsList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeouts"></a>

```python
timeouts: ComputeServiceAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference">ComputeServiceAttachmentTimeoutsOutputReference</a>

---

##### `connection_preference_input`<sup>Optional</sup> <a name="connection_preference_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreferenceInput"></a>

```python
connection_preference_input: str
```

- *Type:* str

---

##### `consumer_accept_lists_input`<sup>Optional</sup> <a name="consumer_accept_lists_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptListsInput"></a>

```python
consumer_accept_lists_input: typing.Union[IResolvable, typing.List[ComputeServiceAttachmentConsumerAcceptLists]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>]]

---

##### `consumer_reject_lists_input`<sup>Optional</sup> <a name="consumer_reject_lists_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectListsInput"></a>

```python
consumer_reject_lists_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_names_input`<sup>Optional</sup> <a name="domain_names_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNamesInput"></a>

```python
domain_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_proxy_protocol_input`<sup>Optional</sup> <a name="enable_proxy_protocol_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocolInput"></a>

```python
enable_proxy_protocol_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nat_subnets_input`<sup>Optional</sup> <a name="nat_subnets_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnetsInput"></a>

```python
nat_subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `propagated_connection_limit_input`<sup>Optional</sup> <a name="propagated_connection_limit_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.propagatedConnectionLimitInput"></a>

```python
propagated_connection_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reconcile_connections_input`<sup>Optional</sup> <a name="reconcile_connections_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnectionsInput"></a>

```python
reconcile_connections_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `target_service_input`<sup>Optional</sup> <a name="target_service_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetServiceInput"></a>

```python
target_service_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeServiceAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>]

---

##### `connection_preference`<sup>Required</sup> <a name="connection_preference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreference"></a>

```python
connection_preference: str
```

- *Type:* str

---

##### `consumer_reject_lists`<sup>Required</sup> <a name="consumer_reject_lists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectLists"></a>

```python
consumer_reject_lists: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_names`<sup>Required</sup> <a name="domain_names" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNames"></a>

```python
domain_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_proxy_protocol`<sup>Required</sup> <a name="enable_proxy_protocol" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocol"></a>

```python
enable_proxy_protocol: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nat_subnets`<sup>Required</sup> <a name="nat_subnets" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnets"></a>

```python
nat_subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `propagated_connection_limit`<sup>Required</sup> <a name="propagated_connection_limit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.propagatedConnectionLimit"></a>

```python
propagated_connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reconcile_connections`<sup>Required</sup> <a name="reconcile_connections" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnections"></a>

```python
reconcile_connections: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `target_service`<sup>Required</sup> <a name="target_service" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetService"></a>

```python
target_service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeServiceAttachmentConfig <a name="ComputeServiceAttachmentConfig" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_preference: str,
  enable_proxy_protocol: typing.Union[bool, IResolvable],
  name: str,
  nat_subnets: typing.List[str],
  target_service: str,
  consumer_accept_lists: typing.Union[IResolvable, typing.List[ComputeServiceAttachmentConsumerAcceptLists]] = None,
  consumer_reject_lists: typing.List[str] = None,
  description: str = None,
  domain_names: typing.List[str] = None,
  id: str = None,
  project: str = None,
  propagated_connection_limit: typing.Union[int, float] = None,
  reconcile_connections: typing.Union[bool, IResolvable] = None,
  region: str = None,
  timeouts: ComputeServiceAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connectionPreference">connection_preference</a></code> | <code>str</code> | The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL". |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.enableProxyProtocol">enable_proxy_protocol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.natSubnets">nat_subnets</a></code> | <code>typing.List[str]</code> | An array of subnets that is provided for NAT in this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.targetService">target_service</a></code> | <code>str</code> | The URL of a service serving the endpoint identified by this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerAcceptLists">consumer_accept_lists</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>]]</code> | consumer_accept_lists block. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerRejectLists">consumer_reject_lists</a></code> | <code>typing.List[str]</code> | An array of projects that are not allowed to connect to this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.domainNames">domain_names</a></code> | <code>typing.List[str]</code> | If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#id ComputeServiceAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#project ComputeServiceAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.propagatedConnectionLimit">propagated_connection_limit</a></code> | <code>typing.Union[int, float]</code> | The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.reconcileConnections">reconcile_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.region">region</a></code> | <code>str</code> | URL of the region where the resource resides. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_preference`<sup>Required</sup> <a name="connection_preference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connectionPreference"></a>

```python
connection_preference: str
```

- *Type:* str

The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#connection_preference ComputeServiceAttachment#connection_preference}

---

##### `enable_proxy_protocol`<sup>Required</sup> <a name="enable_proxy_protocol" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.enableProxyProtocol"></a>

```python
enable_proxy_protocol: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#enable_proxy_protocol ComputeServiceAttachment#enable_proxy_protocol}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#name ComputeServiceAttachment#name}

---

##### `nat_subnets`<sup>Required</sup> <a name="nat_subnets" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.natSubnets"></a>

```python
nat_subnets: typing.List[str]
```

- *Type:* typing.List[str]

An array of subnets that is provided for NAT in this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#nat_subnets ComputeServiceAttachment#nat_subnets}

---

##### `target_service`<sup>Required</sup> <a name="target_service" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.targetService"></a>

```python
target_service: str
```

- *Type:* str

The URL of a service serving the endpoint identified by this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#target_service ComputeServiceAttachment#target_service}

---

##### `consumer_accept_lists`<sup>Optional</sup> <a name="consumer_accept_lists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerAcceptLists"></a>

```python
consumer_accept_lists: typing.Union[IResolvable, typing.List[ComputeServiceAttachmentConsumerAcceptLists]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>]]

consumer_accept_lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#consumer_accept_lists ComputeServiceAttachment#consumer_accept_lists}

---

##### `consumer_reject_lists`<sup>Optional</sup> <a name="consumer_reject_lists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerRejectLists"></a>

```python
consumer_reject_lists: typing.List[str]
```

- *Type:* typing.List[str]

An array of projects that are not allowed to connect to this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#consumer_reject_lists ComputeServiceAttachment#consumer_reject_lists}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#description ComputeServiceAttachment#description}

---

##### `domain_names`<sup>Optional</sup> <a name="domain_names" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.domainNames"></a>

```python
domain_names: typing.List[str]
```

- *Type:* typing.List[str]

If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.

For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#domain_names ComputeServiceAttachment#domain_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#id ComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#project ComputeServiceAttachment#project}.

---

##### `propagated_connection_limit`<sup>Optional</sup> <a name="propagated_connection_limit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.propagatedConnectionLimit"></a>

```python
propagated_connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center.

This limit lets the service producer limit how many propagated Private Service Connect connections can be established to this service attachment from a single consumer.

If the connection preference of the service attachment is ACCEPT_MANUAL, the limit applies to each project or network that is listed in the consumer accept list.
If the connection preference of the service attachment is ACCEPT_AUTOMATIC, the limit applies to each project that contains a connected endpoint.

If unspecified, the default propagated connection limit is 250.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#propagated_connection_limit ComputeServiceAttachment#propagated_connection_limit}

---

##### `reconcile_connections`<sup>Optional</sup> <a name="reconcile_connections" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.reconcileConnections"></a>

```python
reconcile_connections: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.

If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#reconcile_connections ComputeServiceAttachment#reconcile_connections}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.region"></a>

```python
region: str
```

- *Type:* str

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#region ComputeServiceAttachment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.timeouts"></a>

```python
timeouts: ComputeServiceAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#timeouts ComputeServiceAttachment#timeouts}

---

### ComputeServiceAttachmentConnectedEndpoints <a name="ComputeServiceAttachmentConnectedEndpoints" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints()
```


### ComputeServiceAttachmentConsumerAcceptLists <a name="ComputeServiceAttachmentConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists(
  connection_limit: typing.Union[int, float],
  network_url: str = None,
  project_id_or_num: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | The number of consumer forwarding rules the consumer project can create. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.networkUrl">network_url</a></code> | <code>str</code> | The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum">project_id_or_num</a></code> | <code>str</code> | A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |

---

##### `connection_limit`<sup>Required</sup> <a name="connection_limit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consumer forwarding rules the consumer project can create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#connection_limit ComputeServiceAttachment#connection_limit}

---

##### `network_url`<sup>Optional</sup> <a name="network_url" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#network_url ComputeServiceAttachment#network_url}

---

##### `project_id_or_num`<sup>Optional</sup> <a name="project_id_or_num" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum"></a>

```python
project_id_or_num: str
```

- *Type:* str

A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#project_id_or_num ComputeServiceAttachment#project_id_or_num}

---

### ComputeServiceAttachmentTimeouts <a name="ComputeServiceAttachmentTimeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#create ComputeServiceAttachment#create}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#delete ComputeServiceAttachment#delete}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#update ComputeServiceAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#create ComputeServiceAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#delete ComputeServiceAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_service_attachment#update ComputeServiceAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeServiceAttachmentConnectedEndpointsList <a name="ComputeServiceAttachmentConnectedEndpointsList" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeServiceAttachmentConnectedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeServiceAttachmentConnectedEndpointsOutputReference <a name="ComputeServiceAttachmentConnectedEndpointsOutputReference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork">consumer_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount">propagated_connection_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId">psc_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints">ComputeServiceAttachmentConnectedEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_network`<sup>Required</sup> <a name="consumer_network" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork"></a>

```python
consumer_network: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `propagated_connection_count`<sup>Required</sup> <a name="propagated_connection_count" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount"></a>

```python
propagated_connection_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId"></a>

```python
psc_connection_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeServiceAttachmentConnectedEndpoints
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints">ComputeServiceAttachmentConnectedEndpoints</a>

---


### ComputeServiceAttachmentConsumerAcceptListsList <a name="ComputeServiceAttachmentConsumerAcceptListsList" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeServiceAttachmentConsumerAcceptListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeServiceAttachmentConsumerAcceptLists]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>]]

---


### ComputeServiceAttachmentConsumerAcceptListsOutputReference <a name="ComputeServiceAttachmentConsumerAcceptListsOutputReference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl">reset_network_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum">reset_project_id_or_num</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network_url` <a name="reset_network_url" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl"></a>

```python
def reset_network_url() -> None
```

##### `reset_project_id_or_num` <a name="reset_project_id_or_num" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum"></a>

```python
def reset_project_id_or_num() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput">connection_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput">project_id_or_num_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum">project_id_or_num</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_limit_input`<sup>Optional</sup> <a name="connection_limit_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput"></a>

```python
connection_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `project_id_or_num_input`<sup>Optional</sup> <a name="project_id_or_num_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput"></a>

```python
project_id_or_num_input: str
```

- *Type:* str

---

##### `connection_limit`<sup>Required</sup> <a name="connection_limit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `project_id_or_num`<sup>Required</sup> <a name="project_id_or_num" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```python
project_id_or_num: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeServiceAttachmentConsumerAcceptLists]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>]

---


### ComputeServiceAttachmentTimeoutsOutputReference <a name="ComputeServiceAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_service_attachment

computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeServiceAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>]

---



