# `accessContextManagerServicePerimeterDryRunEgressPolicy` Submodule <a name="`accessContextManagerServicePerimeterDryRunEgressPolicy` Submodule" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerServicePerimeterDryRunEgressPolicy <a name="AccessContextManagerServicePerimeterDryRunEgressPolicy" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy google_access_context_manager_service_perimeter_dry_run_egress_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicy;

AccessContextManagerServicePerimeterDryRunEgressPolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .egressFrom(AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom)
//  .egressTo(AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo)
//  .id(java.lang.String)
//  .timeouts(AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts)
//  .title(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.perimeter">perimeter</a></code> | <code>java.lang.String</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a></code> | egress_to block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#id AccessContextManagerServicePerimeterDryRunEgressPolicy#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Human readable title. Must be unique within the perimeter. Does not affect behavior. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.perimeter"></a>

- *Type:* java.lang.String

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#perimeter AccessContextManagerServicePerimeterDryRunEgressPolicy#perimeter}

---

##### `egressFrom`<sup>Optional</sup> <a name="egressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.egressFrom"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#egress_from AccessContextManagerServicePerimeterDryRunEgressPolicy#egress_from}

---

##### `egressTo`<sup>Optional</sup> <a name="egressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.egressTo"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#egress_to AccessContextManagerServicePerimeterDryRunEgressPolicy#egress_to}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#id AccessContextManagerServicePerimeterDryRunEgressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#timeouts AccessContextManagerServicePerimeterDryRunEgressPolicy#timeouts}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Human readable title. Must be unique within the perimeter. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#title AccessContextManagerServicePerimeterDryRunEgressPolicy#title}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressFrom">putEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressTo">putEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressFrom">resetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressTo">resetEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgressFrom` <a name="putEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressFrom"></a>

```java
public void putEgressFrom(AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

---

##### `putEgressTo` <a name="putEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressTo"></a>

```java
public void putEgressTo(AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.putTimeouts"></a>

```java
public void putTimeouts(AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a>

---

##### `resetEgressFrom` <a name="resetEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressFrom"></a>

```java
public void resetEgressFrom()
```

##### `resetEgressTo` <a name="resetEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressTo"></a>

```java
public void resetEgressTo()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.resetTitle"></a>

```java
public void resetTitle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessContextManagerServicePerimeterDryRunEgressPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicy;

AccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicy;

AccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicy;

AccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicy;

AccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AccessContextManagerServicePerimeterDryRunEgressPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccessContextManagerServicePerimeterDryRunEgressPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccessContextManagerServicePerimeterDryRunEgressPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerServicePerimeterDryRunEgressPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.accessPolicyId">accessPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference">AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFromInput">egressFromInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressToInput">egressToInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeterInput">perimeterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeter">perimeter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.accessPolicyId"></a>

```java
public java.lang.String getAccessPolicyId();
```

- *Type:* java.lang.String

---

##### `egressFrom`<sup>Required</sup> <a name="egressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFrom"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference getEgressFrom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference</a>

---

##### `egressTo`<sup>Required</sup> <a name="egressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressTo"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference getEgressTo();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeouts"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference">AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference</a>

---

##### `egressFromInput`<sup>Optional</sup> <a name="egressFromInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFromInput"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom getEgressFromInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

---

##### `egressToInput`<sup>Optional</sup> <a name="egressToInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressToInput"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo getEgressToInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `perimeterInput`<sup>Optional</sup> <a name="perimeterInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeterInput"></a>

```java
public java.lang.String getPerimeterInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeter"></a>

```java
public java.lang.String getPerimeter();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerServicePerimeterDryRunEgressPolicyConfig <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyConfig" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig;

AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.builder()
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
//  .egressFrom(AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom)
//  .egressTo(AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo)
//  .id(java.lang.String)
//  .timeouts(AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.perimeter">perimeter</a></code> | <code>java.lang.String</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a></code> | egress_to block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#id AccessContextManagerServicePerimeterDryRunEgressPolicy#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.title">title</a></code> | <code>java.lang.String</code> | Human readable title. Must be unique within the perimeter. Does not affect behavior. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.perimeter"></a>

```java
public java.lang.String getPerimeter();
```

- *Type:* java.lang.String

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#perimeter AccessContextManagerServicePerimeterDryRunEgressPolicy#perimeter}

---

##### `egressFrom`<sup>Optional</sup> <a name="egressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressFrom"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom getEgressFrom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#egress_from AccessContextManagerServicePerimeterDryRunEgressPolicy#egress_from}

---

##### `egressTo`<sup>Optional</sup> <a name="egressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressTo"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo getEgressTo();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#egress_to AccessContextManagerServicePerimeterDryRunEgressPolicy#egress_to}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#id AccessContextManagerServicePerimeterDryRunEgressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.timeouts"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#timeouts AccessContextManagerServicePerimeterDryRunEgressPolicy#timeouts}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Human readable title. Must be unique within the perimeter. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#title AccessContextManagerServicePerimeterDryRunEgressPolicy#title}

---

### AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom;

AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.builder()
//  .identities(java.util.List<java.lang.String>)
//  .identityType(java.lang.String)
//  .sourceRestriction(java.lang.String)
//  .sources(IResolvable)
//  .sources(java.util.List<AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | Identities can be an individual user, service account, Google group, or third-party identity. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies the type of identities that are allowed access to outside the perimeter. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sourceRestriction">sourceRestriction</a></code> | <code>java.lang.String</code> | Whether to enforce traffic restrictions based on 'sources' field. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sources">sources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>></code> | sources block. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

Identities can be an individual user, service account, Google group, or third-party identity.

For third-party identity, only single identities
are supported and other identity types are not supported.The v1 identities
that have the prefix user, group and serviceAccount in
https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#identities AccessContextManagerServicePerimeterDryRunEgressPolicy#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Specifies the type of identities that are allowed access to outside the perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#identity_type AccessContextManagerServicePerimeterDryRunEgressPolicy#identity_type}

---

##### `sourceRestriction`<sup>Optional</sup> <a name="sourceRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sourceRestriction"></a>

```java
public java.lang.String getSourceRestriction();
```

- *Type:* java.lang.String

Whether to enforce traffic restrictions based on 'sources' field.

If the 'sources' field is non-empty, then this field must be set to 'SOURCE_RESTRICTION_ENABLED'. Possible values: ["SOURCE_RESTRICTION_ENABLED", "SOURCE_RESTRICTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#source_restriction AccessContextManagerServicePerimeterDryRunEgressPolicy#source_restriction}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sources"></a>

```java
public java.lang.Object getSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>>

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#sources AccessContextManagerServicePerimeterDryRunEgressPolicy#sources}

---

### AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources;

AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.builder()
//  .accessLevel(java.lang.String)
//  .resource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.resource">resource</a></code> | <code>java.lang.String</code> | A Google Cloud resource that is allowed to egress the perimeter. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#access_level AccessContextManagerServicePerimeterDryRunEgressPolicy#access_level}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

A Google Cloud resource that is allowed to egress the perimeter.

Requests from these resources are allowed to access data outside the perimeter.
Currently only projects are allowed. Project format: 'projects/{project_number}'.
The resource may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the
case of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#resource AccessContextManagerServicePerimeterDryRunEgressPolicy#resource}

---

### AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo;

AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.builder()
//  .externalResources(java.util.List<java.lang.String>)
//  .operations(IResolvable)
//  .operations(java.util.List<AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations>)
//  .resources(java.util.List<java.lang.String>)
//  .roles(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.externalResources">externalResources</a></code> | <code>java.util.List<java.lang.String></code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>></code> | operations block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | A list of IAM roles that represent the set of operations that the sources specified in the corresponding 'EgressFrom' are allowed to perform. |

---

##### `externalResources`<sup>Optional</sup> <a name="externalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.externalResources"></a>

```java
public java.util.List<java.lang.String> getExternalResources();
```

- *Type:* java.util.List<java.lang.String>

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#external_resources AccessContextManagerServicePerimeterDryRunEgressPolicy#external_resources}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.operations"></a>

```java
public java.lang.Object getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#operations AccessContextManagerServicePerimeterDryRunEgressPolicy#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#resources AccessContextManagerServicePerimeterDryRunEgressPolicy#resources}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

A list of IAM roles that represent the set of operations that the sources specified in the corresponding 'EgressFrom' are allowed to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#roles AccessContextManagerServicePerimeterDryRunEgressPolicy#roles}

---

### AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations;

AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.builder()
//  .methodSelectors(IResolvable)
//  .methodSelectors(java.util.List<AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors>)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>></code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.methodSelectors"></a>

```java
public java.lang.Object getMethodSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>>

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#method_selectors AccessContextManagerServicePerimeterDryRunEgressPolicy#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#service_name AccessContextManagerServicePerimeterDryRunEgressPolicy#service_name}

---

### AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors;

AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.builder()
//  .method(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.method">method</a></code> | <code>java.lang.String</code> | Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>java.lang.String</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#method AccessContextManagerServicePerimeterDryRunEgressPolicy#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#permission AccessContextManagerServicePerimeterDryRunEgressPolicy#permission}

---

### AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts;

AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#create AccessContextManagerServicePerimeterDryRunEgressPolicy#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#delete AccessContextManagerServicePerimeterDryRunEgressPolicy#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#create AccessContextManagerServicePerimeterDryRunEgressPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#delete AccessContextManagerServicePerimeterDryRunEgressPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference;

new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSourceRestriction">resetSourceRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSources` <a name="putSources" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.putSources"></a>

```java
public void putSources(IResolvable OR java.util.List<AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.putSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>>

---

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentities"></a>

```java
public void resetIdentities()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetSourceRestriction` <a name="resetSourceRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSourceRestriction"></a>

```java
public void resetSourceRestriction()
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSources"></a>

```java
public void resetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestrictionInput">sourceRestrictionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestriction">sourceRestriction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sources"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList getSources();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList</a>

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identitiesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceRestrictionInput`<sup>Optional</sup> <a name="sourceRestrictionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestrictionInput"></a>

```java
public java.lang.String getSourceRestrictionInput();
```

- *Type:* java.lang.String

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourcesInput"></a>

```java
public java.lang.Object getSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>>

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `sourceRestriction`<sup>Required</sup> <a name="sourceRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestriction"></a>

```java
public java.lang.String getSourceRestriction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

---


### AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList;

new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.get"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>>

---


### AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference;

new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetResource"></a>

```java
public void resetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>

---


### AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList;

new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.get"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>>

---


### AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList;

new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.get"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>>

---


### AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference;

new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>

---


### AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference;

new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.putMethodSelectors"></a>

```java
public void putMethodSelectors(IResolvable OR java.util.List<AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>>

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors"></a>

```java
public void resetMethodSelectors()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectors"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList getMethodSelectors();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```java
public java.lang.Object getMethodSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>

---


### AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference;

new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetExternalResources">resetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetRoles">resetRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.putOperations"></a>

```java
public void putOperations(IResolvable OR java.util.List<AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>>

---

##### `resetExternalResources` <a name="resetExternalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetExternalResources"></a>

```java
public void resetExternalResources()
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetRoles` <a name="resetRoles" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetRoles"></a>

```java
public void resetRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResourcesInput">externalResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResources">externalResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operations"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList getOperations();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList</a>

---

##### `externalResourcesInput`<sup>Optional</sup> <a name="externalResourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResourcesInput"></a>

```java
public java.util.List<java.lang.String> getExternalResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operationsInput"></a>

```java
public java.lang.Object getOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalResources`<sup>Required</sup> <a name="externalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResources"></a>

```java
public java.util.List<java.lang.String> getExternalResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

---


### AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference <a name="AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeter_dry_run_egress_policy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference;

new AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunEgressPolicy.AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a>

---



