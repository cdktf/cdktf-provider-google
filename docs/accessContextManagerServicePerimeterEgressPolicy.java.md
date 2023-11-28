# `accessContextManagerServicePerimeterEgressPolicy` Submodule <a name="`accessContextManagerServicePerimeterEgressPolicy` Submodule" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerServicePerimeterEgressPolicy <a name="AccessContextManagerServicePerimeterEgressPolicy" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy google_access_context_manager_service_perimeter_egress_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicy;

AccessContextManagerServicePerimeterEgressPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .perimeter(java.lang.String)
//  .egressFrom(AccessContextManagerServicePerimeterEgressPolicyEgressFrom)
//  .egressTo(AccessContextManagerServicePerimeterEgressPolicyEgressTo)
//  .id(java.lang.String)
//  .timeouts(AccessContextManagerServicePerimeterEgressPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.perimeter">perimeter</a></code> | <code>java.lang.String</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a></code> | egress_to block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#id AccessContextManagerServicePerimeterEgressPolicy#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts">AccessContextManagerServicePerimeterEgressPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.perimeter"></a>

- *Type:* java.lang.String

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#perimeter AccessContextManagerServicePerimeterEgressPolicy#perimeter}

---

##### `egressFrom`<sup>Optional</sup> <a name="egressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.egressFrom"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#egress_from AccessContextManagerServicePerimeterEgressPolicy#egress_from}

---

##### `egressTo`<sup>Optional</sup> <a name="egressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.egressTo"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#egress_to AccessContextManagerServicePerimeterEgressPolicy#egress_to}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#id AccessContextManagerServicePerimeterEgressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts">AccessContextManagerServicePerimeterEgressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#timeouts AccessContextManagerServicePerimeterEgressPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putEgressFrom">putEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putEgressTo">putEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetEgressFrom">resetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetEgressTo">resetEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putEgressFrom` <a name="putEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putEgressFrom"></a>

```java
public void putEgressFrom(AccessContextManagerServicePerimeterEgressPolicyEgressFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

---

##### `putEgressTo` <a name="putEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putEgressTo"></a>

```java
public void putEgressTo(AccessContextManagerServicePerimeterEgressPolicyEgressTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putTimeouts"></a>

```java
public void putTimeouts(AccessContextManagerServicePerimeterEgressPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts">AccessContextManagerServicePerimeterEgressPolicyTimeouts</a>

---

##### `resetEgressFrom` <a name="resetEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetEgressFrom"></a>

```java
public void resetEgressFrom()
```

##### `resetEgressTo` <a name="resetEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetEgressTo"></a>

```java
public void resetEgressTo()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessContextManagerServicePerimeterEgressPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicy;

AccessContextManagerServicePerimeterEgressPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicy;

AccessContextManagerServicePerimeterEgressPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicy;

AccessContextManagerServicePerimeterEgressPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicy;

AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AccessContextManagerServicePerimeterEgressPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccessContextManagerServicePerimeterEgressPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccessContextManagerServicePerimeterEgressPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerServicePerimeterEgressPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference">AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference">AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference">AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressFromInput">egressFromInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressToInput">egressToInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.perimeterInput">perimeterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts">AccessContextManagerServicePerimeterEgressPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.perimeter">perimeter</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `egressFrom`<sup>Required</sup> <a name="egressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressFrom"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference getEgressFrom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference">AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference</a>

---

##### `egressTo`<sup>Required</sup> <a name="egressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressTo"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference getEgressTo();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference">AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.timeouts"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference">AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference</a>

---

##### `egressFromInput`<sup>Optional</sup> <a name="egressFromInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressFromInput"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressFrom getEgressFromInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

---

##### `egressToInput`<sup>Optional</sup> <a name="egressToInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressToInput"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressTo getEgressToInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `perimeterInput`<sup>Optional</sup> <a name="perimeterInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.perimeterInput"></a>

```java
public java.lang.String getPerimeterInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts">AccessContextManagerServicePerimeterEgressPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.perimeter"></a>

```java
public java.lang.String getPerimeter();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerServicePerimeterEgressPolicyConfig <a name="AccessContextManagerServicePerimeterEgressPolicyConfig" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyConfig;

AccessContextManagerServicePerimeterEgressPolicyConfig.builder()
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
    .perimeter(java.lang.String)
//  .egressFrom(AccessContextManagerServicePerimeterEgressPolicyEgressFrom)
//  .egressTo(AccessContextManagerServicePerimeterEgressPolicyEgressTo)
//  .id(java.lang.String)
//  .timeouts(AccessContextManagerServicePerimeterEgressPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.perimeter">perimeter</a></code> | <code>java.lang.String</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a></code> | egress_to block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#id AccessContextManagerServicePerimeterEgressPolicy#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts">AccessContextManagerServicePerimeterEgressPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.perimeter"></a>

```java
public java.lang.String getPerimeter();
```

- *Type:* java.lang.String

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#perimeter AccessContextManagerServicePerimeterEgressPolicy#perimeter}

---

##### `egressFrom`<sup>Optional</sup> <a name="egressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.egressFrom"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressFrom getEgressFrom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#egress_from AccessContextManagerServicePerimeterEgressPolicy#egress_from}

---

##### `egressTo`<sup>Optional</sup> <a name="egressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.egressTo"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressTo getEgressTo();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#egress_to AccessContextManagerServicePerimeterEgressPolicy#egress_to}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#id AccessContextManagerServicePerimeterEgressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.timeouts"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts">AccessContextManagerServicePerimeterEgressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#timeouts AccessContextManagerServicePerimeterEgressPolicy#timeouts}

---

### AccessContextManagerServicePerimeterEgressPolicyEgressFrom <a name="AccessContextManagerServicePerimeterEgressPolicyEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom;

AccessContextManagerServicePerimeterEgressPolicyEgressFrom.builder()
//  .identities(java.util.List<java.lang.String>)
//  .identityType(java.lang.String)
//  .sourceRestriction(java.lang.String)
//  .sources(IResolvable)
//  .sources(java.util.List<AccessContextManagerServicePerimeterEgressPolicyEgressFromSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | A list of identities that are allowed access through this 'EgressPolicy'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies the type of identities that are allowed access to outside the perimeter. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.sourceRestriction">sourceRestriction</a></code> | <code>java.lang.String</code> | Whether to enforce traffic restrictions based on 'sources' field. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.sources">sources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterEgressPolicyEgressFromSources</a>></code> | sources block. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

A list of identities that are allowed access through this 'EgressPolicy'.

Should be in the format of email address. The email address should
represent individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#identities AccessContextManagerServicePerimeterEgressPolicy#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Specifies the type of identities that are allowed access to outside the perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#identity_type AccessContextManagerServicePerimeterEgressPolicy#identity_type}

---

##### `sourceRestriction`<sup>Optional</sup> <a name="sourceRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.sourceRestriction"></a>

```java
public java.lang.String getSourceRestriction();
```

- *Type:* java.lang.String

Whether to enforce traffic restrictions based on 'sources' field.

If the 'sources' field is non-empty, then this field must be set to 'SOURCE_RESTRICTION_ENABLED'. Possible values: ["SOURCE_RESTRICTION_UNSPECIFIED", "SOURCE_RESTRICTION_ENABLED", "SOURCE_RESTRICTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#source_restriction AccessContextManagerServicePerimeterEgressPolicy#source_restriction}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.sources"></a>

```java
public java.lang.Object getSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterEgressPolicyEgressFromSources</a>>

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#sources AccessContextManagerServicePerimeterEgressPolicy#sources}

---

### AccessContextManagerServicePerimeterEgressPolicyEgressFromSources <a name="AccessContextManagerServicePerimeterEgressPolicyEgressFromSources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources;

AccessContextManagerServicePerimeterEgressPolicyEgressFromSources.builder()
//  .accessLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#access_level AccessContextManagerServicePerimeterEgressPolicy#access_level}

---

### AccessContextManagerServicePerimeterEgressPolicyEgressTo <a name="AccessContextManagerServicePerimeterEgressPolicyEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyEgressTo;

AccessContextManagerServicePerimeterEgressPolicyEgressTo.builder()
//  .externalResources(java.util.List<java.lang.String>)
//  .operations(IResolvable)
//  .operations(java.util.List<AccessContextManagerServicePerimeterEgressPolicyEgressToOperations>)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.property.externalResources">externalResources</a></code> | <code>java.util.List<java.lang.String></code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>></code> | operations block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza. |

---

##### `externalResources`<sup>Optional</sup> <a name="externalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.property.externalResources"></a>

```java
public java.util.List<java.lang.String> getExternalResources();
```

- *Type:* java.util.List<java.lang.String>

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#external_resources AccessContextManagerServicePerimeterEgressPolicy#external_resources}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.property.operations"></a>

```java
public java.lang.Object getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#operations AccessContextManagerServicePerimeterEgressPolicy#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#resources AccessContextManagerServicePerimeterEgressPolicy#resources}

---

### AccessContextManagerServicePerimeterEgressPolicyEgressToOperations <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations;

AccessContextManagerServicePerimeterEgressPolicyEgressToOperations.builder()
//  .methodSelectors(IResolvable)
//  .methodSelectors(java.util.List<AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors>)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>></code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.methodSelectors"></a>

```java
public java.lang.Object getMethodSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>>

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#method_selectors AccessContextManagerServicePerimeterEgressPolicy#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#service_name AccessContextManagerServicePerimeterEgressPolicy#service_name}

---

### AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors;

AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.builder()
//  .method(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.method">method</a></code> | <code>java.lang.String</code> | Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>java.lang.String</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#method AccessContextManagerServicePerimeterEgressPolicy#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#permission AccessContextManagerServicePerimeterEgressPolicy#permission}

---

### AccessContextManagerServicePerimeterEgressPolicyTimeouts <a name="AccessContextManagerServicePerimeterEgressPolicyTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyTimeouts;

AccessContextManagerServicePerimeterEgressPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#create AccessContextManagerServicePerimeterEgressPolicy#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#delete AccessContextManagerServicePerimeterEgressPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#update AccessContextManagerServicePerimeterEgressPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#create AccessContextManagerServicePerimeterEgressPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#delete AccessContextManagerServicePerimeterEgressPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/access_context_manager_service_perimeter_egress_policy#update AccessContextManagerServicePerimeterEgressPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference <a name="AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference;

new AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetSourceRestriction">resetSourceRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSources` <a name="putSources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.putSources"></a>

```java
public void putSources(IResolvable OR java.util.List<AccessContextManagerServicePerimeterEgressPolicyEgressFromSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.putSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterEgressPolicyEgressFromSources</a>>

---

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentities"></a>

```java
public void resetIdentities()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetSourceRestriction` <a name="resetSourceRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetSourceRestriction"></a>

```java
public void resetSourceRestriction()
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetSources"></a>

```java
public void resetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList">AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sourceRestrictionInput">sourceRestrictionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterEgressPolicyEgressFromSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sourceRestriction">sourceRestriction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sources"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList getSources();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList">AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList</a>

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identitiesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceRestrictionInput`<sup>Optional</sup> <a name="sourceRestrictionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sourceRestrictionInput"></a>

```java
public java.lang.String getSourceRestrictionInput();
```

- *Type:* java.lang.String

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sourcesInput"></a>

```java
public java.lang.Object getSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterEgressPolicyEgressFromSources</a>>

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `sourceRestriction`<sup>Required</sup> <a name="sourceRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sourceRestriction"></a>

```java
public java.lang.String getSourceRestriction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

---


### AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList <a name="AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList;

new AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.get"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterEgressPolicyEgressFromSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterEgressPolicyEgressFromSources</a>>

---


### AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference <a name="AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference;

new AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterEgressPolicyEgressFromSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterEgressPolicyEgressFromSources</a>

---


### AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList;

new AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.get"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>>

---


### AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList;

new AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.get"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>>

---


### AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference;

new AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>

---


### AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference;

new AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.putMethodSelectors"></a>

```java
public void putMethodSelectors(IResolvable OR java.util.List<AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>>

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors"></a>

```java
public void resetMethodSelectors()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectors"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList getMethodSelectors();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```java
public java.lang.Object getMethodSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>

---


### AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference;

new AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetExternalResources">resetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.putOperations"></a>

```java
public void putOperations(IResolvable OR java.util.List<AccessContextManagerServicePerimeterEgressPolicyEgressToOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>>

---

##### `resetExternalResources` <a name="resetExternalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetExternalResources"></a>

```java
public void resetExternalResources()
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResourcesInput">externalResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResources">externalResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operations"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList getOperations();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList</a>

---

##### `externalResourcesInput`<sup>Optional</sup> <a name="externalResourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResourcesInput"></a>

```java
public java.util.List<java.lang.String> getExternalResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operationsInput"></a>

```java
public java.lang.Object getOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalResources`<sup>Required</sup> <a name="externalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResources"></a>

```java
public java.util.List<java.lang.String> getExternalResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimeterEgressPolicyEgressTo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

---


### AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference <a name="AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_egress_policy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference;

new AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts">AccessContextManagerServicePerimeterEgressPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts">AccessContextManagerServicePerimeterEgressPolicyTimeouts</a>

---



