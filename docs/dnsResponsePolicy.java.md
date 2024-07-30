# `dnsResponsePolicy` Submodule <a name="`dnsResponsePolicy` Submodule" id="@cdktf/provider-google.dnsResponsePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsResponsePolicy <a name="DnsResponsePolicy" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy google_dns_response_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicy;

DnsResponsePolicy.Builder.create(Construct scope, java.lang.String id)
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
    .responsePolicyName(java.lang.String)
//  .description(java.lang.String)
//  .gkeClusters(IResolvable)
//  .gkeClusters(java.util.List<DnsResponsePolicyGkeClusters>)
//  .id(java.lang.String)
//  .networks(IResolvable)
//  .networks(java.util.List<DnsResponsePolicyNetworks>)
//  .project(java.lang.String)
//  .timeouts(DnsResponsePolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.responsePolicyName">responsePolicyName</a></code> | <code>java.lang.String</code> | The user assigned name for this Response Policy, such as 'myresponsepolicy'. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the response policy, such as 'My new response policy'. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.gkeClusters">gkeClusters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>></code> | gke_clusters block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#id DnsResponsePolicy#id}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.networks">networks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>></code> | networks block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#project DnsResponsePolicy#project}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `responsePolicyName`<sup>Required</sup> <a name="responsePolicyName" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.responsePolicyName"></a>

- *Type:* java.lang.String

The user assigned name for this Response Policy, such as 'myresponsepolicy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#response_policy_name DnsResponsePolicy#response_policy_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the response policy, such as 'My new response policy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#description DnsResponsePolicy#description}

---

##### `gkeClusters`<sup>Optional</sup> <a name="gkeClusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.gkeClusters"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>>

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#gke_clusters DnsResponsePolicy#gke_clusters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#id DnsResponsePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.networks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>>

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#networks DnsResponsePolicy#networks}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#project DnsResponsePolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#timeouts DnsResponsePolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putGkeClusters">putGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetGkeClusters">resetGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetNetworks">resetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGkeClusters` <a name="putGkeClusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putGkeClusters"></a>

```java
public void putGkeClusters(IResolvable OR java.util.List<DnsResponsePolicyGkeClusters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putGkeClusters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>>

---

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putNetworks"></a>

```java
public void putNetworks(IResolvable OR java.util.List<DnsResponsePolicyNetworks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putNetworks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts"></a>

```java
public void putTimeouts(DnsResponsePolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGkeClusters` <a name="resetGkeClusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetGkeClusters"></a>

```java
public void resetGkeClusters()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetId"></a>

```java
public void resetId()
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetNetworks"></a>

```java
public void resetNetworks()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsResponsePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicy;

DnsResponsePolicy.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicy;

DnsResponsePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicy;

DnsResponsePolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicy;

DnsResponsePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DnsResponsePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DnsResponsePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DnsResponsePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DnsResponsePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DnsResponsePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClusters">gkeClusters</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList">DnsResponsePolicyGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList">DnsResponsePolicyNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference">DnsResponsePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClustersInput">gkeClustersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networksInput">networksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyNameInput">responsePolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyName">responsePolicyName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gkeClusters`<sup>Required</sup> <a name="gkeClusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClusters"></a>

```java
public DnsResponsePolicyGkeClustersList getGkeClusters();
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList">DnsResponsePolicyGkeClustersList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networks"></a>

```java
public DnsResponsePolicyNetworksList getNetworks();
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList">DnsResponsePolicyNetworksList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeouts"></a>

```java
public DnsResponsePolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference">DnsResponsePolicyTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gkeClustersInput`<sup>Optional</sup> <a name="gkeClustersInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClustersInput"></a>

```java
public java.lang.Object getGkeClustersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networksInput"></a>

```java
public java.lang.Object getNetworksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `responsePolicyNameInput`<sup>Optional</sup> <a name="responsePolicyNameInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyNameInput"></a>

```java
public java.lang.String getResponsePolicyNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `responsePolicyName`<sup>Required</sup> <a name="responsePolicyName" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyName"></a>

```java
public java.lang.String getResponsePolicyName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DnsResponsePolicyConfig <a name="DnsResponsePolicyConfig" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicyConfig;

DnsResponsePolicyConfig.builder()
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
    .responsePolicyName(java.lang.String)
//  .description(java.lang.String)
//  .gkeClusters(IResolvable)
//  .gkeClusters(java.util.List<DnsResponsePolicyGkeClusters>)
//  .id(java.lang.String)
//  .networks(IResolvable)
//  .networks(java.util.List<DnsResponsePolicyNetworks>)
//  .project(java.lang.String)
//  .timeouts(DnsResponsePolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.responsePolicyName">responsePolicyName</a></code> | <code>java.lang.String</code> | The user assigned name for this Response Policy, such as 'myresponsepolicy'. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the response policy, such as 'My new response policy'. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.gkeClusters">gkeClusters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>></code> | gke_clusters block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#id DnsResponsePolicy#id}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.networks">networks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>></code> | networks block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#project DnsResponsePolicy#project}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `responsePolicyName`<sup>Required</sup> <a name="responsePolicyName" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.responsePolicyName"></a>

```java
public java.lang.String getResponsePolicyName();
```

- *Type:* java.lang.String

The user assigned name for this Response Policy, such as 'myresponsepolicy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#response_policy_name DnsResponsePolicy#response_policy_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the response policy, such as 'My new response policy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#description DnsResponsePolicy#description}

---

##### `gkeClusters`<sup>Optional</sup> <a name="gkeClusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.gkeClusters"></a>

```java
public java.lang.Object getGkeClusters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>>

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#gke_clusters DnsResponsePolicy#gke_clusters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#id DnsResponsePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.networks"></a>

```java
public java.lang.Object getNetworks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>>

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#networks DnsResponsePolicy#networks}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#project DnsResponsePolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.timeouts"></a>

```java
public DnsResponsePolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#timeouts DnsResponsePolicy#timeouts}

---

### DnsResponsePolicyGkeClusters <a name="DnsResponsePolicyGkeClusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicyGkeClusters;

DnsResponsePolicyGkeClusters.builder()
    .gkeClusterName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters.property.gkeClusterName">gkeClusterName</a></code> | <code>java.lang.String</code> | The resource name of the cluster to bind this ManagedZone to. |

---

##### `gkeClusterName`<sup>Required</sup> <a name="gkeClusterName" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters.property.gkeClusterName"></a>

```java
public java.lang.String getGkeClusterName();
```

- *Type:* java.lang.String

The resource name of the cluster to bind this ManagedZone to.

This should be specified in the format like
'projects/* /locations/* /clusters/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#gke_cluster_name DnsResponsePolicy#gke_cluster_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DnsResponsePolicyNetworks <a name="DnsResponsePolicyNetworks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicyNetworks;

DnsResponsePolicyNetworks.builder()
    .networkUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks.property.networkUrl">networkUrl</a></code> | <code>java.lang.String</code> | The fully qualified URL of the VPC network to bind to. This should be formatted like 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'. |

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks.property.networkUrl"></a>

```java
public java.lang.String getNetworkUrl();
```

- *Type:* java.lang.String

The fully qualified URL of the VPC network to bind to. This should be formatted like 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#network_url DnsResponsePolicy#network_url}

---

### DnsResponsePolicyTimeouts <a name="DnsResponsePolicyTimeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicyTimeouts;

DnsResponsePolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#create DnsResponsePolicy#create}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#delete DnsResponsePolicy#delete}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#update DnsResponsePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#create DnsResponsePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#delete DnsResponsePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dns_response_policy#update DnsResponsePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsResponsePolicyGkeClustersList <a name="DnsResponsePolicyGkeClustersList" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicyGkeClustersList;

new DnsResponsePolicyGkeClustersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.get"></a>

```java
public DnsResponsePolicyGkeClustersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>>

---


### DnsResponsePolicyGkeClustersOutputReference <a name="DnsResponsePolicyGkeClustersOutputReference" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicyGkeClustersOutputReference;

new DnsResponsePolicyGkeClustersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterNameInput">gkeClusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterName">gkeClusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gkeClusterNameInput`<sup>Optional</sup> <a name="gkeClusterNameInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterNameInput"></a>

```java
public java.lang.String getGkeClusterNameInput();
```

- *Type:* java.lang.String

---

##### `gkeClusterName`<sup>Required</sup> <a name="gkeClusterName" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterName"></a>

```java
public java.lang.String getGkeClusterName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>

---


### DnsResponsePolicyNetworksList <a name="DnsResponsePolicyNetworksList" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicyNetworksList;

new DnsResponsePolicyNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.get"></a>

```java
public DnsResponsePolicyNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>>

---


### DnsResponsePolicyNetworksOutputReference <a name="DnsResponsePolicyNetworksOutputReference" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicyNetworksOutputReference;

new DnsResponsePolicyNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrlInput">networkUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrl">networkUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkUrlInput`<sup>Optional</sup> <a name="networkUrlInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrlInput"></a>

```java
public java.lang.String getNetworkUrlInput();
```

- *Type:* java.lang.String

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrl"></a>

```java
public java.lang.String getNetworkUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>

---


### DnsResponsePolicyTimeoutsOutputReference <a name="DnsResponsePolicyTimeoutsOutputReference" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy.DnsResponsePolicyTimeoutsOutputReference;

new DnsResponsePolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>

---



