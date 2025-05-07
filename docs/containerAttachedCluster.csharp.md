# `containerAttachedCluster` Submodule <a name="`containerAttachedCluster` Submodule" id="@cdktf/provider-google.containerAttachedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAttachedCluster <a name="ContainerAttachedCluster" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster google_container_attached_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedCluster(Construct Scope, string Id, ContainerAttachedClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig">ContainerAttachedClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig">ContainerAttachedClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putBinaryAuthorization">PutBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putFleet">PutFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putMonitoringConfig">PutMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putOidcConfig">PutOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putProxyConfig">PutProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putSecurityPostureConfig">PutSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetBinaryAuthorization">ResetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetMonitoringConfig">ResetMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetProxyConfig">ResetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetSecurityPostureConfig">ResetSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putAuthorization"></a>

```csharp
private void PutAuthorization(ContainerAttachedClusterAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a>

---

##### `PutBinaryAuthorization` <a name="PutBinaryAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putBinaryAuthorization"></a>

```csharp
private void PutBinaryAuthorization(ContainerAttachedClusterBinaryAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a>

---

##### `PutFleet` <a name="PutFleet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putFleet"></a>

```csharp
private void PutFleet(ContainerAttachedClusterFleet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a>

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(ContainerAttachedClusterLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a>

---

##### `PutMonitoringConfig` <a name="PutMonitoringConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putMonitoringConfig"></a>

```csharp
private void PutMonitoringConfig(ContainerAttachedClusterMonitoringConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putMonitoringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a>

---

##### `PutOidcConfig` <a name="PutOidcConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putOidcConfig"></a>

```csharp
private void PutOidcConfig(ContainerAttachedClusterOidcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putOidcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a>

---

##### `PutProxyConfig` <a name="PutProxyConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putProxyConfig"></a>

```csharp
private void PutProxyConfig(ContainerAttachedClusterProxyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a>

---

##### `PutSecurityPostureConfig` <a name="PutSecurityPostureConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putSecurityPostureConfig"></a>

```csharp
private void PutSecurityPostureConfig(ContainerAttachedClusterSecurityPostureConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putSecurityPostureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerAttachedClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetBinaryAuthorization` <a name="ResetBinaryAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetBinaryAuthorization"></a>

```csharp
private void ResetBinaryAuthorization()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetMonitoringConfig` <a name="ResetMonitoringConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetMonitoringConfig"></a>

```csharp
private void ResetMonitoringConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProxyConfig` <a name="ResetProxyConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetProxyConfig"></a>

```csharp
private void ResetProxyConfig()
```

##### `ResetSecurityPostureConfig` <a name="ResetSecurityPostureConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetSecurityPostureConfig"></a>

```csharp
private void ResetSecurityPostureConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAttachedCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAttachedCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAttachedCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAttachedCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAttachedCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerAttachedCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAttachedCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAttachedCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAttachedCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference">ContainerAttachedClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference">ContainerAttachedClusterBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.clusterRegion">ClusterRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList">ContainerAttachedClusterErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference">ContainerAttachedClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.kubernetesVersion">KubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference">ContainerAttachedClusterLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.monitoringConfig">MonitoringConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference">ContainerAttachedClusterMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.oidcConfig">OidcConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference">ContainerAttachedClusterOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference">ContainerAttachedClusterProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.securityPostureConfig">SecurityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference">ContainerAttachedClusterSecurityPostureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference">ContainerAttachedClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.workloadIdentityConfig">WorkloadIdentityConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList">ContainerAttachedClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.binaryAuthorizationInput">BinaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.distributionInput">DistributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fleetInput">FleetInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.monitoringConfigInput">MonitoringConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.oidcConfigInput">OidcConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.platformVersionInput">PlatformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.proxyConfigInput">ProxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.securityPostureConfigInput">SecurityPostureConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.distribution">Distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.authorization"></a>

```csharp
public ContainerAttachedClusterAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference">ContainerAttachedClusterAuthorizationOutputReference</a>

---

##### `BinaryAuthorization`<sup>Required</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.binaryAuthorization"></a>

```csharp
public ContainerAttachedClusterBinaryAuthorizationOutputReference BinaryAuthorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference">ContainerAttachedClusterBinaryAuthorizationOutputReference</a>

---

##### `ClusterRegion`<sup>Required</sup> <a name="ClusterRegion" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.clusterRegion"></a>

```csharp
public string ClusterRegion { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.errors"></a>

```csharp
public ContainerAttachedClusterErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList">ContainerAttachedClusterErrorsList</a>

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fleet"></a>

```csharp
public ContainerAttachedClusterFleetOutputReference Fleet { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference">ContainerAttachedClusterFleetOutputReference</a>

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.kubernetesVersion"></a>

```csharp
public string KubernetesVersion { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.loggingConfig"></a>

```csharp
public ContainerAttachedClusterLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference">ContainerAttachedClusterLoggingConfigOutputReference</a>

---

##### `MonitoringConfig`<sup>Required</sup> <a name="MonitoringConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.monitoringConfig"></a>

```csharp
public ContainerAttachedClusterMonitoringConfigOutputReference MonitoringConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference">ContainerAttachedClusterMonitoringConfigOutputReference</a>

---

##### `OidcConfig`<sup>Required</sup> <a name="OidcConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.oidcConfig"></a>

```csharp
public ContainerAttachedClusterOidcConfigOutputReference OidcConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference">ContainerAttachedClusterOidcConfigOutputReference</a>

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.proxyConfig"></a>

```csharp
public ContainerAttachedClusterProxyConfigOutputReference ProxyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference">ContainerAttachedClusterProxyConfigOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SecurityPostureConfig`<sup>Required</sup> <a name="SecurityPostureConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.securityPostureConfig"></a>

```csharp
public ContainerAttachedClusterSecurityPostureConfigOutputReference SecurityPostureConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference">ContainerAttachedClusterSecurityPostureConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.timeouts"></a>

```csharp
public ContainerAttachedClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference">ContainerAttachedClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkloadIdentityConfig`<sup>Required</sup> <a name="WorkloadIdentityConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.workloadIdentityConfig"></a>

```csharp
public ContainerAttachedClusterWorkloadIdentityConfigList WorkloadIdentityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList">ContainerAttachedClusterWorkloadIdentityConfigList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.authorizationInput"></a>

```csharp
public ContainerAttachedClusterAuthorization AuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a>

---

##### `BinaryAuthorizationInput`<sup>Optional</sup> <a name="BinaryAuthorizationInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.binaryAuthorizationInput"></a>

```csharp
public ContainerAttachedClusterBinaryAuthorization BinaryAuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DistributionInput`<sup>Optional</sup> <a name="DistributionInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.distributionInput"></a>

```csharp
public string DistributionInput { get; }
```

- *Type:* string

---

##### `FleetInput`<sup>Optional</sup> <a name="FleetInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fleetInput"></a>

```csharp
public ContainerAttachedClusterFleet FleetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.loggingConfigInput"></a>

```csharp
public ContainerAttachedClusterLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a>

---

##### `MonitoringConfigInput`<sup>Optional</sup> <a name="MonitoringConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.monitoringConfigInput"></a>

```csharp
public ContainerAttachedClusterMonitoringConfig MonitoringConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OidcConfigInput`<sup>Optional</sup> <a name="OidcConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.oidcConfigInput"></a>

```csharp
public ContainerAttachedClusterOidcConfig OidcConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a>

---

##### `PlatformVersionInput`<sup>Optional</sup> <a name="PlatformVersionInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.platformVersionInput"></a>

```csharp
public string PlatformVersionInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProxyConfigInput`<sup>Optional</sup> <a name="ProxyConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.proxyConfigInput"></a>

```csharp
public ContainerAttachedClusterProxyConfig ProxyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a>

---

##### `SecurityPostureConfigInput`<sup>Optional</sup> <a name="SecurityPostureConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.securityPostureConfigInput"></a>

```csharp
public ContainerAttachedClusterSecurityPostureConfig SecurityPostureConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.distribution"></a>

```csharp
public string Distribution { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAttachedClusterAuthorization <a name="ContainerAttachedClusterAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterAuthorization {
    string[] AdminGroups = null,
    string[] AdminUsers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization.property.adminGroups">AdminGroups</a></code> | <code>string[]</code> | Groups that can perform operations as a cluster admin. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization.property.adminUsers">AdminUsers</a></code> | <code>string[]</code> | Users that can perform operations as a cluster admin. |

---

##### `AdminGroups`<sup>Optional</sup> <a name="AdminGroups" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization.property.adminGroups"></a>

```csharp
public string[] AdminGroups { get; set; }
```

- *Type:* string[]

Groups that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the groups. Up to ten admin groups can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#admin_groups ContainerAttachedCluster#admin_groups}

---

##### `AdminUsers`<sup>Optional</sup> <a name="AdminUsers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization.property.adminUsers"></a>

```csharp
public string[] AdminUsers { get; set; }
```

- *Type:* string[]

Users that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the users. Up to ten admin users can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#admin_users ContainerAttachedCluster#admin_users}

---

### ContainerAttachedClusterBinaryAuthorization <a name="ContainerAttachedClusterBinaryAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterBinaryAuthorization {
    string EvaluationMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization.property.evaluationMode">EvaluationMode</a></code> | <code>string</code> | Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"]. |

---

##### `EvaluationMode`<sup>Optional</sup> <a name="EvaluationMode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization.property.evaluationMode"></a>

```csharp
public string EvaluationMode { get; set; }
```

- *Type:* string

Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#evaluation_mode ContainerAttachedCluster#evaluation_mode}

---

### ContainerAttachedClusterConfig <a name="ContainerAttachedClusterConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Distribution,
    ContainerAttachedClusterFleet Fleet,
    string Location,
    string Name,
    ContainerAttachedClusterOidcConfig OidcConfig,
    string PlatformVersion,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    ContainerAttachedClusterAuthorization Authorization = null,
    ContainerAttachedClusterBinaryAuthorization BinaryAuthorization = null,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    ContainerAttachedClusterLoggingConfig LoggingConfig = null,
    ContainerAttachedClusterMonitoringConfig MonitoringConfig = null,
    string Project = null,
    ContainerAttachedClusterProxyConfig ProxyConfig = null,
    ContainerAttachedClusterSecurityPostureConfig SecurityPostureConfig = null,
    ContainerAttachedClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.distribution">Distribution</a></code> | <code>string</code> | The Kubernetes distribution of the underlying attached cluster. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.name">Name</a></code> | <code>string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.oidcConfig">OidcConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | The platform version for the cluster (e.g. '1.23.0-gke.1'). |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.description">Description</a></code> | <code>string</code> | A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#id ContainerAttachedCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.monitoringConfig">MonitoringConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a></code> | monitoring_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.securityPostureConfig">SecurityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a></code> | security_posture_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.distribution"></a>

```csharp
public string Distribution { get; set; }
```

- *Type:* string

The Kubernetes distribution of the underlying attached cluster.

Supported values:
"eks", "aks", "generic". The generic distribution provides the ability to register
or migrate any CNCF conformant cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#distribution ContainerAttachedCluster#distribution}

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.fleet"></a>

```csharp
public ContainerAttachedClusterFleet Fleet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#fleet ContainerAttachedCluster#fleet}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#location ContainerAttachedCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#name ContainerAttachedCluster#name}

---

##### `OidcConfig`<sup>Required</sup> <a name="OidcConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.oidcConfig"></a>

```csharp
public ContainerAttachedClusterOidcConfig OidcConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#oidc_config ContainerAttachedCluster#oidc_config}

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; set; }
```

- *Type:* string

The platform version for the cluster (e.g. '1.23.0-gke.1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#platform_version ContainerAttachedCluster#platform_version}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

Annotations on the cluster. This field has the same
restrictions as Kubernetes annotations. The total size of all keys and
values combined is limited to 256k. Key can have 2 segments: prefix (optional)
and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#annotations ContainerAttachedCluster#annotations}

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.authorization"></a>

```csharp
public ContainerAttachedClusterAuthorization Authorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#authorization ContainerAttachedCluster#authorization}

---

##### `BinaryAuthorization`<sup>Optional</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.binaryAuthorization"></a>

```csharp
public ContainerAttachedClusterBinaryAuthorization BinaryAuthorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#binary_authorization ContainerAttachedCluster#binary_authorization}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#deletion_policy ContainerAttachedCluster#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#description ContainerAttachedCluster#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#id ContainerAttachedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.loggingConfig"></a>

```csharp
public ContainerAttachedClusterLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#logging_config ContainerAttachedCluster#logging_config}

---

##### `MonitoringConfig`<sup>Optional</sup> <a name="MonitoringConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.monitoringConfig"></a>

```csharp
public ContainerAttachedClusterMonitoringConfig MonitoringConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a>

monitoring_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#monitoring_config ContainerAttachedCluster#monitoring_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}.

---

##### `ProxyConfig`<sup>Optional</sup> <a name="ProxyConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.proxyConfig"></a>

```csharp
public ContainerAttachedClusterProxyConfig ProxyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#proxy_config ContainerAttachedCluster#proxy_config}

---

##### `SecurityPostureConfig`<sup>Optional</sup> <a name="SecurityPostureConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.securityPostureConfig"></a>

```csharp
public ContainerAttachedClusterSecurityPostureConfig SecurityPostureConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a>

security_posture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#security_posture_config ContainerAttachedCluster#security_posture_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.timeouts"></a>

```csharp
public ContainerAttachedClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#timeouts ContainerAttachedCluster#timeouts}

---

### ContainerAttachedClusterErrors <a name="ContainerAttachedClusterErrors" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterErrors {

};
```


### ContainerAttachedClusterFleet <a name="ContainerAttachedClusterFleet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterFleet {
    string Project
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet.property.project">Project</a></code> | <code>string</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}

---

### ContainerAttachedClusterLoggingConfig <a name="ContainerAttachedClusterLoggingConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterLoggingConfig {
    ContainerAttachedClusterLoggingConfigComponentConfig ComponentConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig.property.componentConfig">ComponentConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a></code> | component_config block. |

---

##### `ComponentConfig`<sup>Optional</sup> <a name="ComponentConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig.property.componentConfig"></a>

```csharp
public ContainerAttachedClusterLoggingConfigComponentConfig ComponentConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a>

component_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#component_config ContainerAttachedCluster#component_config}

---

### ContainerAttachedClusterLoggingConfigComponentConfig <a name="ContainerAttachedClusterLoggingConfigComponentConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterLoggingConfigComponentConfig {
    string[] EnableComponents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig.property.enableComponents">EnableComponents</a></code> | <code>string[]</code> | The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"]. |

---

##### `EnableComponents`<sup>Optional</sup> <a name="EnableComponents" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig.property.enableComponents"></a>

```csharp
public string[] EnableComponents { get; set; }
```

- *Type:* string[]

The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#enable_components ContainerAttachedCluster#enable_components}

---

### ContainerAttachedClusterMonitoringConfig <a name="ContainerAttachedClusterMonitoringConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterMonitoringConfig {
    ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig ManagedPrometheusConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig.property.managedPrometheusConfig">ManagedPrometheusConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | managed_prometheus_config block. |

---

##### `ManagedPrometheusConfig`<sup>Optional</sup> <a name="ManagedPrometheusConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig.property.managedPrometheusConfig"></a>

```csharp
public ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig ManagedPrometheusConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

managed_prometheus_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#managed_prometheus_config ContainerAttachedCluster#managed_prometheus_config}

---

### ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig <a name="ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enable Managed Collection. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enable Managed Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#enabled ContainerAttachedCluster#enabled}

---

### ContainerAttachedClusterOidcConfig <a name="ContainerAttachedClusterOidcConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterOidcConfig {
    string IssuerUrl,
    string Jwks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.property.jwks">Jwks</a></code> | <code>string</code> | OIDC verification keys in JWKS format (RFC 7517). |

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; set; }
```

- *Type:* string

A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#issuer_url ContainerAttachedCluster#issuer_url}

---

##### `Jwks`<sup>Optional</sup> <a name="Jwks" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.property.jwks"></a>

```csharp
public string Jwks { get; set; }
```

- *Type:* string

OIDC verification keys in JWKS format (RFC 7517).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#jwks ContainerAttachedCluster#jwks}

---

### ContainerAttachedClusterProxyConfig <a name="ContainerAttachedClusterProxyConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterProxyConfig {
    ContainerAttachedClusterProxyConfigKubernetesSecret KubernetesSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig.property.kubernetesSecret">KubernetesSecret</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | kubernetes_secret block. |

---

##### `KubernetesSecret`<sup>Optional</sup> <a name="KubernetesSecret" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig.property.kubernetesSecret"></a>

```csharp
public ContainerAttachedClusterProxyConfigKubernetesSecret KubernetesSecret { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a>

kubernetes_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#kubernetes_secret ContainerAttachedCluster#kubernetes_secret}

---

### ContainerAttachedClusterProxyConfigKubernetesSecret <a name="ContainerAttachedClusterProxyConfigKubernetesSecret" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterProxyConfigKubernetesSecret {
    string Name,
    string Namespace
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret.property.name">Name</a></code> | <code>string</code> | Name of the kubernetes secret containing the proxy config. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the kubernetes secret containing the proxy config. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the kubernetes secret containing the proxy config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#name ContainerAttachedCluster#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the kubernetes secret containing the proxy config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#namespace ContainerAttachedCluster#namespace}

---

### ContainerAttachedClusterSecurityPostureConfig <a name="ContainerAttachedClusterSecurityPostureConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterSecurityPostureConfig {
    string VulnerabilityMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig.property.vulnerabilityMode">VulnerabilityMode</a></code> | <code>string</code> | Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_ENTERPRISE"]. |

---

##### `VulnerabilityMode`<sup>Required</sup> <a name="VulnerabilityMode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig.property.vulnerabilityMode"></a>

```csharp
public string VulnerabilityMode { get; set; }
```

- *Type:* string

Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#vulnerability_mode ContainerAttachedCluster#vulnerability_mode}

---

### ContainerAttachedClusterTimeouts <a name="ContainerAttachedClusterTimeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#create ContainerAttachedCluster#create}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#delete ContainerAttachedCluster#delete}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#update ContainerAttachedCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#create ContainerAttachedCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#delete ContainerAttachedCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/container_attached_cluster#update ContainerAttachedCluster#update}.

---

### ContainerAttachedClusterWorkloadIdentityConfig <a name="ContainerAttachedClusterWorkloadIdentityConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterWorkloadIdentityConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ContainerAttachedClusterAuthorizationOutputReference <a name="ContainerAttachedClusterAuthorizationOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resetAdminGroups">ResetAdminGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resetAdminUsers">ResetAdminUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminGroups` <a name="ResetAdminGroups" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resetAdminGroups"></a>

```csharp
private void ResetAdminGroups()
```

##### `ResetAdminUsers` <a name="ResetAdminUsers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resetAdminUsers"></a>

```csharp
private void ResetAdminUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminGroupsInput">AdminGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminUsersInput">AdminUsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminGroups">AdminGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminUsers">AdminUsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminGroupsInput`<sup>Optional</sup> <a name="AdminGroupsInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminGroupsInput"></a>

```csharp
public string[] AdminGroupsInput { get; }
```

- *Type:* string[]

---

##### `AdminUsersInput`<sup>Optional</sup> <a name="AdminUsersInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```csharp
public string[] AdminUsersInput { get; }
```

- *Type:* string[]

---

##### `AdminGroups`<sup>Required</sup> <a name="AdminGroups" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminGroups"></a>

```csharp
public string[] AdminGroups { get; }
```

- *Type:* string[]

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminUsers"></a>

```csharp
public string[] AdminUsers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.internalValue"></a>

```csharp
public ContainerAttachedClusterAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a>

---


### ContainerAttachedClusterBinaryAuthorizationOutputReference <a name="ContainerAttachedClusterBinaryAuthorizationOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterBinaryAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resetEvaluationMode">ResetEvaluationMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluationMode` <a name="ResetEvaluationMode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resetEvaluationMode"></a>

```csharp
private void ResetEvaluationMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationModeInput">EvaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationMode">EvaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluationModeInput`<sup>Optional</sup> <a name="EvaluationModeInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationModeInput"></a>

```csharp
public string EvaluationModeInput { get; }
```

- *Type:* string

---

##### `EvaluationMode`<sup>Required</sup> <a name="EvaluationMode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationMode"></a>

```csharp
public string EvaluationMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.internalValue"></a>

```csharp
public ContainerAttachedClusterBinaryAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a>

---


### ContainerAttachedClusterErrorsList <a name="ContainerAttachedClusterErrorsList" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.get"></a>

```csharp
private ContainerAttachedClusterErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ContainerAttachedClusterErrorsOutputReference <a name="ContainerAttachedClusterErrorsOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrors">ContainerAttachedClusterErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.internalValue"></a>

```csharp
public ContainerAttachedClusterErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrors">ContainerAttachedClusterErrors</a>

---


### ContainerAttachedClusterFleetOutputReference <a name="ContainerAttachedClusterFleetOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterFleetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.membership">Membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.membership"></a>

```csharp
public string Membership { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.internalValue"></a>

```csharp
public ContainerAttachedClusterFleet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a>

---


### ContainerAttachedClusterLoggingConfigComponentConfigOutputReference <a name="ContainerAttachedClusterLoggingConfigComponentConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterLoggingConfigComponentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents">ResetEnableComponents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableComponents` <a name="ResetEnableComponents" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents"></a>

```csharp
private void ResetEnableComponents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput">EnableComponentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponents">EnableComponents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableComponentsInput`<sup>Optional</sup> <a name="EnableComponentsInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput"></a>

```csharp
public string[] EnableComponentsInput { get; }
```

- *Type:* string[]

---

##### `EnableComponents`<sup>Required</sup> <a name="EnableComponents" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponents"></a>

```csharp
public string[] EnableComponents { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAttachedClusterLoggingConfigComponentConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a>

---


### ContainerAttachedClusterLoggingConfigOutputReference <a name="ContainerAttachedClusterLoggingConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig">PutComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resetComponentConfig">ResetComponentConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComponentConfig` <a name="PutComponentConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig"></a>

```csharp
private void PutComponentConfig(ContainerAttachedClusterLoggingConfigComponentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a>

---

##### `ResetComponentConfig` <a name="ResetComponentConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resetComponentConfig"></a>

```csharp
private void ResetComponentConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.componentConfig">ComponentConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference">ContainerAttachedClusterLoggingConfigComponentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.componentConfigInput">ComponentConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentConfig`<sup>Required</sup> <a name="ComponentConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.componentConfig"></a>

```csharp
public ContainerAttachedClusterLoggingConfigComponentConfigOutputReference ComponentConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference">ContainerAttachedClusterLoggingConfigComponentConfigOutputReference</a>

---

##### `ComponentConfigInput`<sup>Optional</sup> <a name="ComponentConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.componentConfigInput"></a>

```csharp
public ContainerAttachedClusterLoggingConfigComponentConfig ComponentConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAttachedClusterLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a>

---


### ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference <a name="ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---


### ContainerAttachedClusterMonitoringConfigOutputReference <a name="ContainerAttachedClusterMonitoringConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterMonitoringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig">PutManagedPrometheusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resetManagedPrometheusConfig">ResetManagedPrometheusConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedPrometheusConfig` <a name="PutManagedPrometheusConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig"></a>

```csharp
private void PutManagedPrometheusConfig(ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---

##### `ResetManagedPrometheusConfig` <a name="ResetManagedPrometheusConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resetManagedPrometheusConfig"></a>

```csharp
private void ResetManagedPrometheusConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfig">ManagedPrometheusConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfigInput">ManagedPrometheusConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedPrometheusConfig`<sup>Required</sup> <a name="ManagedPrometheusConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfig"></a>

```csharp
public ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference ManagedPrometheusConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference</a>

---

##### `ManagedPrometheusConfigInput`<sup>Optional</sup> <a name="ManagedPrometheusConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfigInput"></a>

```csharp
public ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig ManagedPrometheusConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAttachedClusterMonitoringConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a>

---


### ContainerAttachedClusterOidcConfigOutputReference <a name="ContainerAttachedClusterOidcConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterOidcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resetJwks">ResetJwks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJwks` <a name="ResetJwks" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resetJwks"></a>

```csharp
private void ResetJwks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.jwksInput">JwksInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.jwks">Jwks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.issuerUrlInput"></a>

```csharp
public string IssuerUrlInput { get; }
```

- *Type:* string

---

##### `JwksInput`<sup>Optional</sup> <a name="JwksInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.jwksInput"></a>

```csharp
public string JwksInput { get; }
```

- *Type:* string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; }
```

- *Type:* string

---

##### `Jwks`<sup>Required</sup> <a name="Jwks" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.jwks"></a>

```csharp
public string Jwks { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAttachedClusterOidcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a>

---


### ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference <a name="ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.internalValue"></a>

```csharp
public ContainerAttachedClusterProxyConfigKubernetesSecret InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a>

---


### ContainerAttachedClusterProxyConfigOutputReference <a name="ContainerAttachedClusterProxyConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterProxyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret">PutKubernetesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.resetKubernetesSecret">ResetKubernetesSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKubernetesSecret` <a name="PutKubernetesSecret" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret"></a>

```csharp
private void PutKubernetesSecret(ContainerAttachedClusterProxyConfigKubernetesSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a>

---

##### `ResetKubernetesSecret` <a name="ResetKubernetesSecret" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.resetKubernetesSecret"></a>

```csharp
private void ResetKubernetesSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecret">KubernetesSecret</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference">ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecretInput">KubernetesSecretInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KubernetesSecret`<sup>Required</sup> <a name="KubernetesSecret" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecret"></a>

```csharp
public ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference KubernetesSecret { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference">ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference</a>

---

##### `KubernetesSecretInput`<sup>Optional</sup> <a name="KubernetesSecretInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecretInput"></a>

```csharp
public ContainerAttachedClusterProxyConfigKubernetesSecret KubernetesSecretInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAttachedClusterProxyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a>

---


### ContainerAttachedClusterSecurityPostureConfigOutputReference <a name="ContainerAttachedClusterSecurityPostureConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterSecurityPostureConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityModeInput">VulnerabilityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityMode">VulnerabilityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VulnerabilityModeInput`<sup>Optional</sup> <a name="VulnerabilityModeInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityModeInput"></a>

```csharp
public string VulnerabilityModeInput { get; }
```

- *Type:* string

---

##### `VulnerabilityMode`<sup>Required</sup> <a name="VulnerabilityMode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityMode"></a>

```csharp
public string VulnerabilityMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAttachedClusterSecurityPostureConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a>

---


### ContainerAttachedClusterTimeoutsOutputReference <a name="ContainerAttachedClusterTimeoutsOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAttachedClusterWorkloadIdentityConfigList <a name="ContainerAttachedClusterWorkloadIdentityConfigList" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterWorkloadIdentityConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.get"></a>

```csharp
private ContainerAttachedClusterWorkloadIdentityConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ContainerAttachedClusterWorkloadIdentityConfigOutputReference <a name="ContainerAttachedClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAttachedClusterWorkloadIdentityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.identityProvider">IdentityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.issuerUri">IssuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.workloadPool">WorkloadPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig">ContainerAttachedClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```csharp
public string IdentityProvider { get; }
```

- *Type:* string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```csharp
public string IssuerUri { get; }
```

- *Type:* string

---

##### `WorkloadPool`<sup>Required</sup> <a name="WorkloadPool" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```csharp
public string WorkloadPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAttachedClusterWorkloadIdentityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig">ContainerAttachedClusterWorkloadIdentityConfig</a>

---



