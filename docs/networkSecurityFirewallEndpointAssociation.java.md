# `networkSecurityFirewallEndpointAssociation` Submodule <a name="`networkSecurityFirewallEndpointAssociation` Submodule" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityFirewallEndpointAssociation <a name="NetworkSecurityFirewallEndpointAssociation" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association google_network_security_firewall_endpoint_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_firewall_endpoint_association.NetworkSecurityFirewallEndpointAssociation;

NetworkSecurityFirewallEndpointAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .firewallEndpoint(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .network(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .parent(java.lang.String)
//  .timeouts(NetworkSecurityFirewallEndpointAssociationTimeouts)
//  .tlsInspectionPolicy(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.firewallEndpoint">firewallEndpoint</a></code> | <code>java.lang.String</code> | The URL of the firewall endpoint that is being associated. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location (zone) of the firewall endpoint association. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the firewall endpoint association resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The URL of the network that is being associated. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the association is disabled. True indicates that traffic will not be intercepted. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#id NetworkSecurityFirewallEndpointAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.tlsInspectionPolicy">tlsInspectionPolicy</a></code> | <code>java.lang.String</code> | The URL of the TlsInspectionPolicy that is being associated. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `firewallEndpoint`<sup>Required</sup> <a name="firewallEndpoint" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.firewallEndpoint"></a>

- *Type:* java.lang.String

The URL of the firewall endpoint that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#firewall_endpoint NetworkSecurityFirewallEndpointAssociation#firewall_endpoint}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location (zone) of the firewall endpoint association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#location NetworkSecurityFirewallEndpointAssociation#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the firewall endpoint association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#name NetworkSecurityFirewallEndpointAssociation#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The URL of the network that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#network NetworkSecurityFirewallEndpointAssociation#network}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the association is disabled. True indicates that traffic will not be intercepted.

~> **Note:** The API will reject the request if this value is set to true when creating the resource,
otherwise on an update the association can be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#disabled NetworkSecurityFirewallEndpointAssociation#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#id NetworkSecurityFirewallEndpointAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#labels NetworkSecurityFirewallEndpointAssociation#labels}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#parent NetworkSecurityFirewallEndpointAssociation#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#timeouts NetworkSecurityFirewallEndpointAssociation#timeouts}

---

##### `tlsInspectionPolicy`<sup>Optional</sup> <a name="tlsInspectionPolicy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.tlsInspectionPolicy"></a>

- *Type:* java.lang.String

The URL of the TlsInspectionPolicy that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#tls_inspection_policy NetworkSecurityFirewallEndpointAssociation#tls_inspection_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTlsInspectionPolicy">resetTlsInspectionPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts"></a>

```java
public void putTimeouts(NetworkSecurityFirewallEndpointAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetParent"></a>

```java
public void resetParent()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsInspectionPolicy` <a name="resetTlsInspectionPolicy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTlsInspectionPolicy"></a>

```java
public void resetTlsInspectionPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityFirewallEndpointAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_firewall_endpoint_association.NetworkSecurityFirewallEndpointAssociation;

NetworkSecurityFirewallEndpointAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_firewall_endpoint_association.NetworkSecurityFirewallEndpointAssociation;

NetworkSecurityFirewallEndpointAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_firewall_endpoint_association.NetworkSecurityFirewallEndpointAssociation;

NetworkSecurityFirewallEndpointAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_firewall_endpoint_association.NetworkSecurityFirewallEndpointAssociation;

NetworkSecurityFirewallEndpointAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkSecurityFirewallEndpointAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkSecurityFirewallEndpointAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkSecurityFirewallEndpointAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkSecurityFirewallEndpointAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityFirewallEndpointAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference">NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpointInput">firewallEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicyInput">tlsInspectionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpoint">firewallEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicy">tlsInspectionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeouts"></a>

```java
public NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference">NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallEndpointInput`<sup>Optional</sup> <a name="firewallEndpointInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpointInput"></a>

```java
public java.lang.String getFirewallEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>

---

##### `tlsInspectionPolicyInput`<sup>Optional</sup> <a name="tlsInspectionPolicyInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicyInput"></a>

```java
public java.lang.String getTlsInspectionPolicyInput();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallEndpoint`<sup>Required</sup> <a name="firewallEndpoint" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpoint"></a>

```java
public java.lang.String getFirewallEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `tlsInspectionPolicy`<sup>Required</sup> <a name="tlsInspectionPolicy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicy"></a>

```java
public java.lang.String getTlsInspectionPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityFirewallEndpointAssociationConfig <a name="NetworkSecurityFirewallEndpointAssociationConfig" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_firewall_endpoint_association.NetworkSecurityFirewallEndpointAssociationConfig;

NetworkSecurityFirewallEndpointAssociationConfig.builder()
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
    .firewallEndpoint(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .network(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .parent(java.lang.String)
//  .timeouts(NetworkSecurityFirewallEndpointAssociationTimeouts)
//  .tlsInspectionPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.firewallEndpoint">firewallEndpoint</a></code> | <code>java.lang.String</code> | The URL of the firewall endpoint that is being associated. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location (zone) of the firewall endpoint association. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the firewall endpoint association resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.network">network</a></code> | <code>java.lang.String</code> | The URL of the network that is being associated. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the association is disabled. True indicates that traffic will not be intercepted. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#id NetworkSecurityFirewallEndpointAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.tlsInspectionPolicy">tlsInspectionPolicy</a></code> | <code>java.lang.String</code> | The URL of the TlsInspectionPolicy that is being associated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `firewallEndpoint`<sup>Required</sup> <a name="firewallEndpoint" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.firewallEndpoint"></a>

```java
public java.lang.String getFirewallEndpoint();
```

- *Type:* java.lang.String

The URL of the firewall endpoint that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#firewall_endpoint NetworkSecurityFirewallEndpointAssociation#firewall_endpoint}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location (zone) of the firewall endpoint association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#location NetworkSecurityFirewallEndpointAssociation#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the firewall endpoint association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#name NetworkSecurityFirewallEndpointAssociation#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The URL of the network that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#network NetworkSecurityFirewallEndpointAssociation#network}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the association is disabled. True indicates that traffic will not be intercepted.

~> **Note:** The API will reject the request if this value is set to true when creating the resource,
otherwise on an update the association can be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#disabled NetworkSecurityFirewallEndpointAssociation#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#id NetworkSecurityFirewallEndpointAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#labels NetworkSecurityFirewallEndpointAssociation#labels}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#parent NetworkSecurityFirewallEndpointAssociation#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.timeouts"></a>

```java
public NetworkSecurityFirewallEndpointAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#timeouts NetworkSecurityFirewallEndpointAssociation#timeouts}

---

##### `tlsInspectionPolicy`<sup>Optional</sup> <a name="tlsInspectionPolicy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.tlsInspectionPolicy"></a>

```java
public java.lang.String getTlsInspectionPolicy();
```

- *Type:* java.lang.String

The URL of the TlsInspectionPolicy that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#tls_inspection_policy NetworkSecurityFirewallEndpointAssociation#tls_inspection_policy}

---

### NetworkSecurityFirewallEndpointAssociationTimeouts <a name="NetworkSecurityFirewallEndpointAssociationTimeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_firewall_endpoint_association.NetworkSecurityFirewallEndpointAssociationTimeouts;

NetworkSecurityFirewallEndpointAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#create NetworkSecurityFirewallEndpointAssociation#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#delete NetworkSecurityFirewallEndpointAssociation#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#update NetworkSecurityFirewallEndpointAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#create NetworkSecurityFirewallEndpointAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#delete NetworkSecurityFirewallEndpointAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/network_security_firewall_endpoint_association#update NetworkSecurityFirewallEndpointAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference <a name="NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_firewall_endpoint_association.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference;

new NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>

---



