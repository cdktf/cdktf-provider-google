# `computeServiceAttachment` Submodule <a name="`computeServiceAttachment` Submodule" id="@cdktf/provider-google.computeServiceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeServiceAttachment <a name="ComputeServiceAttachment" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment google_compute_service_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachment;

ComputeServiceAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .connectionPreference(java.lang.String)
    .enableProxyProtocol(java.lang.Boolean)
    .enableProxyProtocol(IResolvable)
    .name(java.lang.String)
    .natSubnets(java.util.List<java.lang.String>)
    .targetService(java.lang.String)
//  .consumerAcceptLists(IResolvable)
//  .consumerAcceptLists(java.util.List<ComputeServiceAttachmentConsumerAcceptLists>)
//  .consumerRejectLists(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .domainNames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .propagatedConnectionLimit(java.lang.Number)
//  .reconcileConnections(java.lang.Boolean)
//  .reconcileConnections(IResolvable)
//  .region(java.lang.String)
//  .sendPropagatedConnectionLimitIfZero(java.lang.Boolean)
//  .sendPropagatedConnectionLimitIfZero(IResolvable)
//  .timeouts(ComputeServiceAttachmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.connectionPreference">connectionPreference</a></code> | <code>java.lang.String</code> | The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL". |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.enableProxyProtocol">enableProxyProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.natSubnets">natSubnets</a></code> | <code>java.util.List<java.lang.String></code> | An array of subnets that is provided for NAT in this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.targetService">targetService</a></code> | <code>java.lang.String</code> | The URL of a service serving the endpoint identified by this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.consumerAcceptLists">consumerAcceptLists</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>></code> | consumer_accept_lists block. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.consumerRejectLists">consumerRejectLists</a></code> | <code>java.util.List<java.lang.String></code> | An array of projects that are not allowed to connect to this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.domainNames">domainNames</a></code> | <code>java.util.List<java.lang.String></code> | If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#id ComputeServiceAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#project ComputeServiceAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.propagatedConnectionLimit">propagatedConnectionLimit</a></code> | <code>java.lang.Number</code> | The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.reconcileConnections">reconcileConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | URL of the region where the resource resides. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.sendPropagatedConnectionLimitIfZero">sendPropagatedConnectionLimitIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls the behavior of propagated_connection_limit. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionPreference`<sup>Required</sup> <a name="connectionPreference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.connectionPreference"></a>

- *Type:* java.lang.String

The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#connection_preference ComputeServiceAttachment#connection_preference}

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.enableProxyProtocol"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#enable_proxy_protocol ComputeServiceAttachment#enable_proxy_protocol}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#name ComputeServiceAttachment#name}

---

##### `natSubnets`<sup>Required</sup> <a name="natSubnets" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.natSubnets"></a>

- *Type:* java.util.List<java.lang.String>

An array of subnets that is provided for NAT in this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#nat_subnets ComputeServiceAttachment#nat_subnets}

---

##### `targetService`<sup>Required</sup> <a name="targetService" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.targetService"></a>

- *Type:* java.lang.String

The URL of a service serving the endpoint identified by this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#target_service ComputeServiceAttachment#target_service}

---

##### `consumerAcceptLists`<sup>Optional</sup> <a name="consumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.consumerAcceptLists"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>>

consumer_accept_lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#consumer_accept_lists ComputeServiceAttachment#consumer_accept_lists}

---

##### `consumerRejectLists`<sup>Optional</sup> <a name="consumerRejectLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.consumerRejectLists"></a>

- *Type:* java.util.List<java.lang.String>

An array of projects that are not allowed to connect to this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#consumer_reject_lists ComputeServiceAttachment#consumer_reject_lists}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#description ComputeServiceAttachment#description}

---

##### `domainNames`<sup>Optional</sup> <a name="domainNames" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.domainNames"></a>

- *Type:* java.util.List<java.lang.String>

If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.

For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#domain_names ComputeServiceAttachment#domain_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#id ComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#project ComputeServiceAttachment#project}.

---

##### `propagatedConnectionLimit`<sup>Optional</sup> <a name="propagatedConnectionLimit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.propagatedConnectionLimit"></a>

- *Type:* java.lang.Number

The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center.

This limit lets the service producer limit how many propagated Private Service Connect connections can be established to this service attachment from a single consumer.

If the connection preference of the service attachment is ACCEPT_MANUAL, the limit applies to each project or network that is listed in the consumer accept list.
If the connection preference of the service attachment is ACCEPT_AUTOMATIC, the limit applies to each project that contains a connected endpoint.

If unspecified, the default propagated connection limit is 250. To explicitly send a zero value, set 'send_propagated_connection_limit_if_zero = true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#propagated_connection_limit ComputeServiceAttachment#propagated_connection_limit}

---

##### `reconcileConnections`<sup>Optional</sup> <a name="reconcileConnections" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.reconcileConnections"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.

If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#reconcile_connections ComputeServiceAttachment#reconcile_connections}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#region ComputeServiceAttachment#region}

---

##### `sendPropagatedConnectionLimitIfZero`<sup>Optional</sup> <a name="sendPropagatedConnectionLimitIfZero" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.sendPropagatedConnectionLimitIfZero"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls the behavior of propagated_connection_limit.

When false, setting propagated_connection_limit to zero causes the provider to use to the API's default value.
When true, the provider will set propagated_connection_limit to zero.
Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#send_propagated_connection_limit_if_zero ComputeServiceAttachment#send_propagated_connection_limit_if_zero}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#timeouts ComputeServiceAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists">putConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerAcceptLists">resetConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerRejectLists">resetConsumerRejectLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDomainNames">resetDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetPropagatedConnectionLimit">resetPropagatedConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetReconcileConnections">resetReconcileConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetSendPropagatedConnectionLimitIfZero">resetSendPropagatedConnectionLimitIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConsumerAcceptLists` <a name="putConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists"></a>

```java
public void putConsumerAcceptLists(IResolvable OR java.util.List<ComputeServiceAttachmentConsumerAcceptLists> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts"></a>

```java
public void putTimeouts(ComputeServiceAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>

---

##### `resetConsumerAcceptLists` <a name="resetConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerAcceptLists"></a>

```java
public void resetConsumerAcceptLists()
```

##### `resetConsumerRejectLists` <a name="resetConsumerRejectLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerRejectLists"></a>

```java
public void resetConsumerRejectLists()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDomainNames` <a name="resetDomainNames" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDomainNames"></a>

```java
public void resetDomainNames()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetProject"></a>

```java
public void resetProject()
```

##### `resetPropagatedConnectionLimit` <a name="resetPropagatedConnectionLimit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetPropagatedConnectionLimit"></a>

```java
public void resetPropagatedConnectionLimit()
```

##### `resetReconcileConnections` <a name="resetReconcileConnections" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetReconcileConnections"></a>

```java
public void resetReconcileConnections()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSendPropagatedConnectionLimitIfZero` <a name="resetSendPropagatedConnectionLimitIfZero" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetSendPropagatedConnectionLimitIfZero"></a>

```java
public void resetSendPropagatedConnectionLimitIfZero()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeServiceAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachment;

ComputeServiceAttachment.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachment;

ComputeServiceAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachment;

ComputeServiceAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachment;

ComputeServiceAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeServiceAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeServiceAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeServiceAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeServiceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeServiceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectedEndpoints">connectedEndpoints</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList">ComputeServiceAttachmentConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptLists">consumerAcceptLists</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList">ComputeServiceAttachmentConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference">ComputeServiceAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreferenceInput">connectionPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptListsInput">consumerAcceptListsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectListsInput">consumerRejectListsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNamesInput">domainNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocolInput">enableProxyProtocolInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnetsInput">natSubnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.propagatedConnectionLimitInput">propagatedConnectionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnectionsInput">reconcileConnectionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZeroInput">sendPropagatedConnectionLimitIfZeroInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetServiceInput">targetServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreference">connectionPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectLists">consumerRejectLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNames">domainNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnets">natSubnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.propagatedConnectionLimit">propagatedConnectionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnections">reconcileConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZero">sendPropagatedConnectionLimitIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetService">targetService</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectedEndpoints`<sup>Required</sup> <a name="connectedEndpoints" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectedEndpoints"></a>

```java
public ComputeServiceAttachmentConnectedEndpointsList getConnectedEndpoints();
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList">ComputeServiceAttachmentConnectedEndpointsList</a>

---

##### `consumerAcceptLists`<sup>Required</sup> <a name="consumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptLists"></a>

```java
public ComputeServiceAttachmentConsumerAcceptListsList getConsumerAcceptLists();
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList">ComputeServiceAttachmentConsumerAcceptListsList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeouts"></a>

```java
public ComputeServiceAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference">ComputeServiceAttachmentTimeoutsOutputReference</a>

---

##### `connectionPreferenceInput`<sup>Optional</sup> <a name="connectionPreferenceInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreferenceInput"></a>

```java
public java.lang.String getConnectionPreferenceInput();
```

- *Type:* java.lang.String

---

##### `consumerAcceptListsInput`<sup>Optional</sup> <a name="consumerAcceptListsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptListsInput"></a>

```java
public java.lang.Object getConsumerAcceptListsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>>

---

##### `consumerRejectListsInput`<sup>Optional</sup> <a name="consumerRejectListsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectListsInput"></a>

```java
public java.util.List<java.lang.String> getConsumerRejectListsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainNamesInput`<sup>Optional</sup> <a name="domainNamesInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNamesInput"></a>

```java
public java.util.List<java.lang.String> getDomainNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableProxyProtocolInput`<sup>Optional</sup> <a name="enableProxyProtocolInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocolInput"></a>

```java
public java.lang.Object getEnableProxyProtocolInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `natSubnetsInput`<sup>Optional</sup> <a name="natSubnetsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnetsInput"></a>

```java
public java.util.List<java.lang.String> getNatSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propagatedConnectionLimitInput`<sup>Optional</sup> <a name="propagatedConnectionLimitInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.propagatedConnectionLimitInput"></a>

```java
public java.lang.Number getPropagatedConnectionLimitInput();
```

- *Type:* java.lang.Number

---

##### `reconcileConnectionsInput`<sup>Optional</sup> <a name="reconcileConnectionsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnectionsInput"></a>

```java
public java.lang.Object getReconcileConnectionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sendPropagatedConnectionLimitIfZeroInput`<sup>Optional</sup> <a name="sendPropagatedConnectionLimitIfZeroInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZeroInput"></a>

```java
public java.lang.Object getSendPropagatedConnectionLimitIfZeroInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetServiceInput`<sup>Optional</sup> <a name="targetServiceInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetServiceInput"></a>

```java
public java.lang.String getTargetServiceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>

---

##### `connectionPreference`<sup>Required</sup> <a name="connectionPreference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreference"></a>

```java
public java.lang.String getConnectionPreference();
```

- *Type:* java.lang.String

---

##### `consumerRejectLists`<sup>Required</sup> <a name="consumerRejectLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectLists"></a>

```java
public java.util.List<java.lang.String> getConsumerRejectLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNames"></a>

```java
public java.util.List<java.lang.String> getDomainNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocol"></a>

```java
public java.lang.Object getEnableProxyProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `natSubnets`<sup>Required</sup> <a name="natSubnets" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnets"></a>

```java
public java.util.List<java.lang.String> getNatSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `propagatedConnectionLimit`<sup>Required</sup> <a name="propagatedConnectionLimit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.propagatedConnectionLimit"></a>

```java
public java.lang.Number getPropagatedConnectionLimit();
```

- *Type:* java.lang.Number

---

##### `reconcileConnections`<sup>Required</sup> <a name="reconcileConnections" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnections"></a>

```java
public java.lang.Object getReconcileConnections();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sendPropagatedConnectionLimitIfZero`<sup>Required</sup> <a name="sendPropagatedConnectionLimitIfZero" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZero"></a>

```java
public java.lang.Object getSendPropagatedConnectionLimitIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetService`<sup>Required</sup> <a name="targetService" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetService"></a>

```java
public java.lang.String getTargetService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeServiceAttachmentConfig <a name="ComputeServiceAttachmentConfig" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachmentConfig;

ComputeServiceAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .connectionPreference(java.lang.String)
    .enableProxyProtocol(java.lang.Boolean)
    .enableProxyProtocol(IResolvable)
    .name(java.lang.String)
    .natSubnets(java.util.List<java.lang.String>)
    .targetService(java.lang.String)
//  .consumerAcceptLists(IResolvable)
//  .consumerAcceptLists(java.util.List<ComputeServiceAttachmentConsumerAcceptLists>)
//  .consumerRejectLists(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .domainNames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .propagatedConnectionLimit(java.lang.Number)
//  .reconcileConnections(java.lang.Boolean)
//  .reconcileConnections(IResolvable)
//  .region(java.lang.String)
//  .sendPropagatedConnectionLimitIfZero(java.lang.Boolean)
//  .sendPropagatedConnectionLimitIfZero(IResolvable)
//  .timeouts(ComputeServiceAttachmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connectionPreference">connectionPreference</a></code> | <code>java.lang.String</code> | The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL". |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.natSubnets">natSubnets</a></code> | <code>java.util.List<java.lang.String></code> | An array of subnets that is provided for NAT in this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.targetService">targetService</a></code> | <code>java.lang.String</code> | The URL of a service serving the endpoint identified by this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerAcceptLists">consumerAcceptLists</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>></code> | consumer_accept_lists block. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerRejectLists">consumerRejectLists</a></code> | <code>java.util.List<java.lang.String></code> | An array of projects that are not allowed to connect to this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.domainNames">domainNames</a></code> | <code>java.util.List<java.lang.String></code> | If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#id ComputeServiceAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#project ComputeServiceAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.propagatedConnectionLimit">propagatedConnectionLimit</a></code> | <code>java.lang.Number</code> | The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.reconcileConnections">reconcileConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | URL of the region where the resource resides. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.sendPropagatedConnectionLimitIfZero">sendPropagatedConnectionLimitIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls the behavior of propagated_connection_limit. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionPreference`<sup>Required</sup> <a name="connectionPreference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connectionPreference"></a>

```java
public java.lang.String getConnectionPreference();
```

- *Type:* java.lang.String

The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#connection_preference ComputeServiceAttachment#connection_preference}

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.enableProxyProtocol"></a>

```java
public java.lang.Object getEnableProxyProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#enable_proxy_protocol ComputeServiceAttachment#enable_proxy_protocol}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#name ComputeServiceAttachment#name}

---

##### `natSubnets`<sup>Required</sup> <a name="natSubnets" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.natSubnets"></a>

```java
public java.util.List<java.lang.String> getNatSubnets();
```

- *Type:* java.util.List<java.lang.String>

An array of subnets that is provided for NAT in this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#nat_subnets ComputeServiceAttachment#nat_subnets}

---

##### `targetService`<sup>Required</sup> <a name="targetService" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.targetService"></a>

```java
public java.lang.String getTargetService();
```

- *Type:* java.lang.String

The URL of a service serving the endpoint identified by this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#target_service ComputeServiceAttachment#target_service}

---

##### `consumerAcceptLists`<sup>Optional</sup> <a name="consumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerAcceptLists"></a>

```java
public java.lang.Object getConsumerAcceptLists();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>>

consumer_accept_lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#consumer_accept_lists ComputeServiceAttachment#consumer_accept_lists}

---

##### `consumerRejectLists`<sup>Optional</sup> <a name="consumerRejectLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerRejectLists"></a>

```java
public java.util.List<java.lang.String> getConsumerRejectLists();
```

- *Type:* java.util.List<java.lang.String>

An array of projects that are not allowed to connect to this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#consumer_reject_lists ComputeServiceAttachment#consumer_reject_lists}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#description ComputeServiceAttachment#description}

---

##### `domainNames`<sup>Optional</sup> <a name="domainNames" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.domainNames"></a>

```java
public java.util.List<java.lang.String> getDomainNames();
```

- *Type:* java.util.List<java.lang.String>

If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.

For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#domain_names ComputeServiceAttachment#domain_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#id ComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#project ComputeServiceAttachment#project}.

---

##### `propagatedConnectionLimit`<sup>Optional</sup> <a name="propagatedConnectionLimit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.propagatedConnectionLimit"></a>

```java
public java.lang.Number getPropagatedConnectionLimit();
```

- *Type:* java.lang.Number

The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center.

This limit lets the service producer limit how many propagated Private Service Connect connections can be established to this service attachment from a single consumer.

If the connection preference of the service attachment is ACCEPT_MANUAL, the limit applies to each project or network that is listed in the consumer accept list.
If the connection preference of the service attachment is ACCEPT_AUTOMATIC, the limit applies to each project that contains a connected endpoint.

If unspecified, the default propagated connection limit is 250. To explicitly send a zero value, set 'send_propagated_connection_limit_if_zero = true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#propagated_connection_limit ComputeServiceAttachment#propagated_connection_limit}

---

##### `reconcileConnections`<sup>Optional</sup> <a name="reconcileConnections" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.reconcileConnections"></a>

```java
public java.lang.Object getReconcileConnections();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.

If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#reconcile_connections ComputeServiceAttachment#reconcile_connections}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#region ComputeServiceAttachment#region}

---

##### `sendPropagatedConnectionLimitIfZero`<sup>Optional</sup> <a name="sendPropagatedConnectionLimitIfZero" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.sendPropagatedConnectionLimitIfZero"></a>

```java
public java.lang.Object getSendPropagatedConnectionLimitIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls the behavior of propagated_connection_limit.

When false, setting propagated_connection_limit to zero causes the provider to use to the API's default value.
When true, the provider will set propagated_connection_limit to zero.
Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#send_propagated_connection_limit_if_zero ComputeServiceAttachment#send_propagated_connection_limit_if_zero}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.timeouts"></a>

```java
public ComputeServiceAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#timeouts ComputeServiceAttachment#timeouts}

---

### ComputeServiceAttachmentConnectedEndpoints <a name="ComputeServiceAttachmentConnectedEndpoints" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachmentConnectedEndpoints;

ComputeServiceAttachmentConnectedEndpoints.builder()
    .build();
```


### ComputeServiceAttachmentConsumerAcceptLists <a name="ComputeServiceAttachmentConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachmentConsumerAcceptLists;

ComputeServiceAttachmentConsumerAcceptLists.builder()
    .connectionLimit(java.lang.Number)
//  .networkUrl(java.lang.String)
//  .projectIdOrNum(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | The number of consumer forwarding rules the consumer project can create. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.networkUrl">networkUrl</a></code> | <code>java.lang.String</code> | The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum">projectIdOrNum</a></code> | <code>java.lang.String</code> | A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit"></a>

```java
public java.lang.Number getConnectionLimit();
```

- *Type:* java.lang.Number

The number of consumer forwarding rules the consumer project can create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#connection_limit ComputeServiceAttachment#connection_limit}

---

##### `networkUrl`<sup>Optional</sup> <a name="networkUrl" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.networkUrl"></a>

```java
public java.lang.String getNetworkUrl();
```

- *Type:* java.lang.String

The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#network_url ComputeServiceAttachment#network_url}

---

##### `projectIdOrNum`<sup>Optional</sup> <a name="projectIdOrNum" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum"></a>

```java
public java.lang.String getProjectIdOrNum();
```

- *Type:* java.lang.String

A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#project_id_or_num ComputeServiceAttachment#project_id_or_num}

---

### ComputeServiceAttachmentTimeouts <a name="ComputeServiceAttachmentTimeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachmentTimeouts;

ComputeServiceAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#create ComputeServiceAttachment#create}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#delete ComputeServiceAttachment#delete}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#update ComputeServiceAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#create ComputeServiceAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#delete ComputeServiceAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#update ComputeServiceAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeServiceAttachmentConnectedEndpointsList <a name="ComputeServiceAttachmentConnectedEndpointsList" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachmentConnectedEndpointsList;

new ComputeServiceAttachmentConnectedEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get"></a>

```java
public ComputeServiceAttachmentConnectedEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeServiceAttachmentConnectedEndpointsOutputReference <a name="ComputeServiceAttachmentConnectedEndpointsOutputReference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachmentConnectedEndpointsOutputReference;

new ComputeServiceAttachmentConnectedEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork">consumerNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount">propagatedConnectionCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints">ComputeServiceAttachmentConnectedEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerNetwork`<sup>Required</sup> <a name="consumerNetwork" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork"></a>

```java
public java.lang.String getConsumerNetwork();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `propagatedConnectionCount`<sup>Required</sup> <a name="propagatedConnectionCount" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount"></a>

```java
public java.lang.Number getPropagatedConnectionCount();
```

- *Type:* java.lang.Number

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue"></a>

```java
public ComputeServiceAttachmentConnectedEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints">ComputeServiceAttachmentConnectedEndpoints</a>

---


### ComputeServiceAttachmentConsumerAcceptListsList <a name="ComputeServiceAttachmentConsumerAcceptListsList" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachmentConsumerAcceptListsList;

new ComputeServiceAttachmentConsumerAcceptListsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get"></a>

```java
public ComputeServiceAttachmentConsumerAcceptListsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>>

---


### ComputeServiceAttachmentConsumerAcceptListsOutputReference <a name="ComputeServiceAttachmentConsumerAcceptListsOutputReference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference;

new ComputeServiceAttachmentConsumerAcceptListsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl">resetNetworkUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum">resetProjectIdOrNum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetworkUrl` <a name="resetNetworkUrl" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl"></a>

```java
public void resetNetworkUrl()
```

##### `resetProjectIdOrNum` <a name="resetProjectIdOrNum" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum"></a>

```java
public void resetProjectIdOrNum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput">connectionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput">networkUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput">projectIdOrNumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl">networkUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum">projectIdOrNum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionLimitInput`<sup>Optional</sup> <a name="connectionLimitInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput"></a>

```java
public java.lang.Number getConnectionLimitInput();
```

- *Type:* java.lang.Number

---

##### `networkUrlInput`<sup>Optional</sup> <a name="networkUrlInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput"></a>

```java
public java.lang.String getNetworkUrlInput();
```

- *Type:* java.lang.String

---

##### `projectIdOrNumInput`<sup>Optional</sup> <a name="projectIdOrNumInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput"></a>

```java
public java.lang.String getProjectIdOrNumInput();
```

- *Type:* java.lang.String

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```java
public java.lang.Number getConnectionLimit();
```

- *Type:* java.lang.Number

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl"></a>

```java
public java.lang.String getNetworkUrl();
```

- *Type:* java.lang.String

---

##### `projectIdOrNum`<sup>Required</sup> <a name="projectIdOrNum" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```java
public java.lang.String getProjectIdOrNum();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists">ComputeServiceAttachmentConsumerAcceptLists</a>

---


### ComputeServiceAttachmentTimeoutsOutputReference <a name="ComputeServiceAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_service_attachment.ComputeServiceAttachmentTimeoutsOutputReference;

new ComputeServiceAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>

---



