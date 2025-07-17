# `developerConnectConnection` Submodule <a name="`developerConnectConnection` Submodule" id="@cdktf/provider-google.developerConnectConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeveloperConnectConnection <a name="DeveloperConnectConnection" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection google_developer_connect_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnection(Construct Scope, string Id, DeveloperConnectConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig">DeveloperConnectConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig">DeveloperConnectConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketCloudConfig">PutBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig">PutBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putCryptoKeyConfig">PutCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubConfig">PutGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig">PutGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabConfig">PutGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig">PutGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetBitbucketCloudConfig">ResetBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetBitbucketDataCenterConfig">ResetBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetCryptoKeyConfig">ResetCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGithubConfig">ResetGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGithubEnterpriseConfig">ResetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGitlabConfig">ResetGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGitlabEnterpriseConfig">ResetGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBitbucketCloudConfig` <a name="PutBitbucketCloudConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketCloudConfig"></a>

```csharp
private void PutBitbucketCloudConfig(DeveloperConnectConnectionBitbucketCloudConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketCloudConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a>

---

##### `PutBitbucketDataCenterConfig` <a name="PutBitbucketDataCenterConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig"></a>

```csharp
private void PutBitbucketDataCenterConfig(DeveloperConnectConnectionBitbucketDataCenterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a>

---

##### `PutCryptoKeyConfig` <a name="PutCryptoKeyConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putCryptoKeyConfig"></a>

```csharp
private void PutCryptoKeyConfig(DeveloperConnectConnectionCryptoKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putCryptoKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a>

---

##### `PutGithubConfig` <a name="PutGithubConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubConfig"></a>

```csharp
private void PutGithubConfig(DeveloperConnectConnectionGithubConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a>

---

##### `PutGithubEnterpriseConfig` <a name="PutGithubEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig"></a>

```csharp
private void PutGithubEnterpriseConfig(DeveloperConnectConnectionGithubEnterpriseConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a>

---

##### `PutGitlabConfig` <a name="PutGitlabConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabConfig"></a>

```csharp
private void PutGitlabConfig(DeveloperConnectConnectionGitlabConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a>

---

##### `PutGitlabEnterpriseConfig` <a name="PutGitlabEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig"></a>

```csharp
private void PutGitlabEnterpriseConfig(DeveloperConnectConnectionGitlabEnterpriseConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(DeveloperConnectConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetBitbucketCloudConfig` <a name="ResetBitbucketCloudConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetBitbucketCloudConfig"></a>

```csharp
private void ResetBitbucketCloudConfig()
```

##### `ResetBitbucketDataCenterConfig` <a name="ResetBitbucketDataCenterConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetBitbucketDataCenterConfig"></a>

```csharp
private void ResetBitbucketDataCenterConfig()
```

##### `ResetCryptoKeyConfig` <a name="ResetCryptoKeyConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetCryptoKeyConfig"></a>

```csharp
private void ResetCryptoKeyConfig()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetGithubConfig` <a name="ResetGithubConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGithubConfig"></a>

```csharp
private void ResetGithubConfig()
```

##### `ResetGithubEnterpriseConfig` <a name="ResetGithubEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGithubEnterpriseConfig"></a>

```csharp
private void ResetGithubEnterpriseConfig()
```

##### `ResetGitlabConfig` <a name="ResetGitlabConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGitlabConfig"></a>

```csharp
private void ResetGitlabConfig()
```

##### `ResetGitlabEnterpriseConfig` <a name="ResetGitlabEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGitlabEnterpriseConfig"></a>

```csharp
private void ResetGitlabEnterpriseConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DeveloperConnectConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DeveloperConnectConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DeveloperConnectConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DeveloperConnectConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DeveloperConnectConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DeveloperConnectConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DeveloperConnectConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DeveloperConnectConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DeveloperConnectConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketCloudConfig">BitbucketCloudConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference">DeveloperConnectConnectionBitbucketCloudConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketDataCenterConfig">BitbucketDataCenterConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cryptoKeyConfig">CryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference">DeveloperConnectConnectionCryptoKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubConfig">GithubConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference">DeveloperConnectConnectionGithubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference">DeveloperConnectConnectionGithubEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabConfig">GitlabConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference">DeveloperConnectConnectionGitlabConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabEnterpriseConfig">GitlabEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.installationState">InstallationState</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList">DeveloperConnectConnectionInstallationStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference">DeveloperConnectConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketCloudConfigInput">BitbucketCloudConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketDataCenterConfigInput">BitbucketDataCenterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cryptoKeyConfigInput">CryptoKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubConfigInput">GithubConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubEnterpriseConfigInput">GithubEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabConfigInput">GitlabConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabEnterpriseConfigInput">GitlabEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BitbucketCloudConfig`<sup>Required</sup> <a name="BitbucketCloudConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketCloudConfig"></a>

```csharp
public DeveloperConnectConnectionBitbucketCloudConfigOutputReference BitbucketCloudConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference">DeveloperConnectConnectionBitbucketCloudConfigOutputReference</a>

---

##### `BitbucketDataCenterConfig`<sup>Required</sup> <a name="BitbucketDataCenterConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketDataCenterConfig"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference BitbucketDataCenterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CryptoKeyConfig`<sup>Required</sup> <a name="CryptoKeyConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cryptoKeyConfig"></a>

```csharp
public DeveloperConnectConnectionCryptoKeyConfigOutputReference CryptoKeyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference">DeveloperConnectConnectionCryptoKeyConfigOutputReference</a>

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GithubConfig`<sup>Required</sup> <a name="GithubConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubConfig"></a>

```csharp
public DeveloperConnectConnectionGithubConfigOutputReference GithubConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference">DeveloperConnectConnectionGithubConfigOutputReference</a>

---

##### `GithubEnterpriseConfig`<sup>Required</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubEnterpriseConfig"></a>

```csharp
public DeveloperConnectConnectionGithubEnterpriseConfigOutputReference GithubEnterpriseConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference">DeveloperConnectConnectionGithubEnterpriseConfigOutputReference</a>

---

##### `GitlabConfig`<sup>Required</sup> <a name="GitlabConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabConfig"></a>

```csharp
public DeveloperConnectConnectionGitlabConfigOutputReference GitlabConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference">DeveloperConnectConnectionGitlabConfigOutputReference</a>

---

##### `GitlabEnterpriseConfig`<sup>Required</sup> <a name="GitlabEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabEnterpriseConfig"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference GitlabEnterpriseConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference</a>

---

##### `InstallationState`<sup>Required</sup> <a name="InstallationState" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.installationState"></a>

```csharp
public DeveloperConnectConnectionInstallationStateList InstallationState { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList">DeveloperConnectConnectionInstallationStateList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.timeouts"></a>

```csharp
public DeveloperConnectConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference">DeveloperConnectConnectionTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BitbucketCloudConfigInput`<sup>Optional</sup> <a name="BitbucketCloudConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketCloudConfigInput"></a>

```csharp
public DeveloperConnectConnectionBitbucketCloudConfig BitbucketCloudConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a>

---

##### `BitbucketDataCenterConfigInput`<sup>Optional</sup> <a name="BitbucketDataCenterConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketDataCenterConfigInput"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfig BitbucketDataCenterConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a>

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `CryptoKeyConfigInput`<sup>Optional</sup> <a name="CryptoKeyConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cryptoKeyConfigInput"></a>

```csharp
public DeveloperConnectConnectionCryptoKeyConfig CryptoKeyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `GithubConfigInput`<sup>Optional</sup> <a name="GithubConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubConfigInput"></a>

```csharp
public DeveloperConnectConnectionGithubConfig GithubConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a>

---

##### `GithubEnterpriseConfigInput`<sup>Optional</sup> <a name="GithubEnterpriseConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubEnterpriseConfigInput"></a>

```csharp
public DeveloperConnectConnectionGithubEnterpriseConfig GithubEnterpriseConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a>

---

##### `GitlabConfigInput`<sup>Optional</sup> <a name="GitlabConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabConfigInput"></a>

```csharp
public DeveloperConnectConnectionGitlabConfig GitlabConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a>

---

##### `GitlabEnterpriseConfigInput`<sup>Optional</sup> <a name="GitlabEnterpriseConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabEnterpriseConfigInput"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfig GitlabEnterpriseConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeveloperConnectConnectionBitbucketCloudConfig <a name="DeveloperConnectConnectionBitbucketCloudConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketCloudConfig {
    DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential AuthorizerCredential,
    DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential ReadAuthorizerCredential,
    string WebhookSecretSecretVersion,
    string Workspace
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.workspace">Workspace</a></code> | <code>string</code> | Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.authorizerCredential"></a>

```csharp
public DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential AuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.readAuthorizerCredential"></a>

```csharp
public DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential ReadAuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; set; }
```

- *Type:* string

Required.

Immutable. SecretManager resource containing the webhook secret used to verify webhook
events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
validate and create webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.workspace"></a>

```csharp
public string Workspace { get; set; }
```

- *Type:* string

Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#workspace DeveloperConnectConnection#workspace}

---

### DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential <a name="DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential {
    string UserTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential <a name="DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential {
    string UserTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionBitbucketDataCenterConfig <a name="DeveloperConnectConnectionBitbucketDataCenterConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketDataCenterConfig {
    DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential AuthorizerCredential,
    string HostUri,
    DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential ReadAuthorizerCredential,
    string WebhookSecretSecretVersion,
    DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig ServiceDirectoryConfig = null,
    string SslCaCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.hostUri">HostUri</a></code> | <code>string</code> | Required. The URI of the Bitbucket Data Center host this connection is for. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.sslCaCertificate">SslCaCertificate</a></code> | <code>string</code> | Optional. SSL certificate authority to trust when making requests to Bitbucket Data Center. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.authorizerCredential"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential AuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.hostUri"></a>

```csharp
public string HostUri { get; set; }
```

- *Type:* string

Required. The URI of the Bitbucket Data Center host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential ReadAuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; set; }
```

- *Type:* string

Required.

Immutable. SecretManager resource containing the webhook secret used to verify webhook
events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
validate webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig ServiceDirectoryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}

---

##### `SslCaCertificate`<sup>Optional</sup> <a name="SslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.sslCaCertificate"></a>

```csharp
public string SslCaCertificate { get; set; }
```

- *Type:* string

Optional. SSL certificate authority to trust when making requests to Bitbucket Data Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}

---

### DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential <a name="DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential {
    string UserTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential <a name="DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential {
    string UserTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig <a name="DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig {
    string Service
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}

---

### DeveloperConnectConnectionConfig <a name="DeveloperConnectConnectionConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConnectionId,
    string Location,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    DeveloperConnectConnectionBitbucketCloudConfig BitbucketCloudConfig = null,
    DeveloperConnectConnectionBitbucketDataCenterConfig BitbucketDataCenterConfig = null,
    DeveloperConnectConnectionCryptoKeyConfig CryptoKeyConfig = null,
    object Disabled = null,
    string Etag = null,
    DeveloperConnectConnectionGithubConfig GithubConfig = null,
    DeveloperConnectConnectionGithubEnterpriseConfig GithubEnterpriseConfig = null,
    DeveloperConnectConnectionGitlabConfig GitlabConfig = null,
    DeveloperConnectConnectionGitlabEnterpriseConfig GitlabEnterpriseConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    DeveloperConnectConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.connectionId">ConnectionId</a></code> | <code>string</code> | Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.bitbucketCloudConfig">BitbucketCloudConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a></code> | bitbucket_cloud_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.bitbucketDataCenterConfig">BitbucketDataCenterConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a></code> | bitbucket_data_center_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.cryptoKeyConfig">CryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.disabled">Disabled</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.etag">Etag</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.githubConfig">GithubConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a></code> | github_enterprise_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.gitlabConfig">GitlabConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a></code> | gitlab_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.gitlabEnterpriseConfig">GitlabEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | gitlab_enterprise_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#id DeveloperConnectConnection#id}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#project DeveloperConnectConnection#project}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#connection_id DeveloperConnectConnection#connection_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#location DeveloperConnectConnection#location}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#annotations DeveloperConnectConnection#annotations}

---

##### `BitbucketCloudConfig`<sup>Optional</sup> <a name="BitbucketCloudConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.bitbucketCloudConfig"></a>

```csharp
public DeveloperConnectConnectionBitbucketCloudConfig BitbucketCloudConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a>

bitbucket_cloud_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#bitbucket_cloud_config DeveloperConnectConnection#bitbucket_cloud_config}

---

##### `BitbucketDataCenterConfig`<sup>Optional</sup> <a name="BitbucketDataCenterConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.bitbucketDataCenterConfig"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfig BitbucketDataCenterConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a>

bitbucket_data_center_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#bitbucket_data_center_config DeveloperConnectConnection#bitbucket_data_center_config}

---

##### `CryptoKeyConfig`<sup>Optional</sup> <a name="CryptoKeyConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.cryptoKeyConfig"></a>

```csharp
public DeveloperConnectConnectionCryptoKeyConfig CryptoKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#crypto_key_config DeveloperConnectConnection#crypto_key_config}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Optional.

If disabled is set to true, functionality is disabled for this connection.
Repository based API methods and webhooks processing for repositories in
this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#disabled DeveloperConnectConnection#disabled}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#etag DeveloperConnectConnection#etag}

---

##### `GithubConfig`<sup>Optional</sup> <a name="GithubConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.githubConfig"></a>

```csharp
public DeveloperConnectConnectionGithubConfig GithubConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#github_config DeveloperConnectConnection#github_config}

---

##### `GithubEnterpriseConfig`<sup>Optional</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.githubEnterpriseConfig"></a>

```csharp
public DeveloperConnectConnectionGithubEnterpriseConfig GithubEnterpriseConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a>

github_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#github_enterprise_config DeveloperConnectConnection#github_enterprise_config}

---

##### `GitlabConfig`<sup>Optional</sup> <a name="GitlabConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.gitlabConfig"></a>

```csharp
public DeveloperConnectConnectionGitlabConfig GitlabConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a>

gitlab_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#gitlab_config DeveloperConnectConnection#gitlab_config}

---

##### `GitlabEnterpriseConfig`<sup>Optional</sup> <a name="GitlabEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.gitlabEnterpriseConfig"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfig GitlabEnterpriseConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a>

gitlab_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#gitlab_enterprise_config DeveloperConnectConnection#gitlab_enterprise_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#id DeveloperConnectConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#labels DeveloperConnectConnection#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#project DeveloperConnectConnection#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.timeouts"></a>

```csharp
public DeveloperConnectConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#timeouts DeveloperConnectConnection#timeouts}

---

### DeveloperConnectConnectionCryptoKeyConfig <a name="DeveloperConnectConnectionCryptoKeyConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionCryptoKeyConfig {
    string KeyReference
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig.property.keyReference">KeyReference</a></code> | <code>string</code> | Required. |

---

##### `KeyReference`<sup>Required</sup> <a name="KeyReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig.property.keyReference"></a>

```csharp
public string KeyReference { get; set; }
```

- *Type:* string

Required.

The name of the key which is used to encrypt/decrypt customer data. For key
in Cloud KMS, the key should be in the format of
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#key_reference DeveloperConnectConnection#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGithubConfig <a name="DeveloperConnectConnectionGithubConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGithubConfig {
    string GithubApp,
    string AppInstallationId = null,
    DeveloperConnectConnectionGithubConfigAuthorizerCredential AuthorizerCredential = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.githubApp">GithubApp</a></code> | <code>string</code> | Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. Possible values: GIT_HUB_APP_UNSPECIFIED DEVELOPER_CONNECT FIREBASE. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.appInstallationId">AppInstallationId</a></code> | <code>string</code> | Optional. GitHub App installation id. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | authorizer_credential block. |

---

##### `GithubApp`<sup>Required</sup> <a name="GithubApp" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.githubApp"></a>

```csharp
public string GithubApp { get; set; }
```

- *Type:* string

Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. Possible values: GIT_HUB_APP_UNSPECIFIED DEVELOPER_CONNECT FIREBASE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#github_app DeveloperConnectConnection#github_app}

---

##### `AppInstallationId`<sup>Optional</sup> <a name="AppInstallationId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.appInstallationId"></a>

```csharp
public string AppInstallationId { get; set; }
```

- *Type:* string

Optional. GitHub App installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#app_installation_id DeveloperConnectConnection#app_installation_id}

---

##### `AuthorizerCredential`<sup>Optional</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.authorizerCredential"></a>

```csharp
public DeveloperConnectConnectionGithubConfigAuthorizerCredential AuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

### DeveloperConnectConnectionGithubConfigAuthorizerCredential <a name="DeveloperConnectConnectionGithubConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGithubConfigAuthorizerCredential {
    string OauthTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion">OauthTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `OauthTokenSecretVersion`<sup>Required</sup> <a name="OauthTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion"></a>

```csharp
public string OauthTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#oauth_token_secret_version DeveloperConnectConnection#oauth_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGithubEnterpriseConfig <a name="DeveloperConnectConnectionGithubEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGithubEnterpriseConfig {
    string HostUri,
    string AppId = null,
    string AppInstallationId = null,
    string PrivateKeySecretVersion = null,
    DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig ServiceDirectoryConfig = null,
    string SslCaCertificate = null,
    string WebhookSecretSecretVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.hostUri">HostUri</a></code> | <code>string</code> | Required. The URI of the GitHub Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.appId">AppId</a></code> | <code>string</code> | Optional. ID of the GitHub App created from the manifest. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.appInstallationId">AppInstallationId</a></code> | <code>string</code> | Optional. ID of the installation of the GitHub App. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.privateKeySecretVersion">PrivateKeySecretVersion</a></code> | <code>string</code> | Optional. SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.sslCaCertificate">SslCaCertificate</a></code> | <code>string</code> | Optional. SSL certificate to use for requests to GitHub Enterprise. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.hostUri"></a>

```csharp
public string HostUri { get; set; }
```

- *Type:* string

Required. The URI of the GitHub Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}

---

##### `AppId`<sup>Optional</sup> <a name="AppId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

Optional. ID of the GitHub App created from the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#app_id DeveloperConnectConnection#app_id}

---

##### `AppInstallationId`<sup>Optional</sup> <a name="AppInstallationId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.appInstallationId"></a>

```csharp
public string AppInstallationId { get; set; }
```

- *Type:* string

Optional. ID of the installation of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#app_installation_id DeveloperConnectConnection#app_installation_id}

---

##### `PrivateKeySecretVersion`<sup>Optional</sup> <a name="PrivateKeySecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.privateKeySecretVersion"></a>

```csharp
public string PrivateKeySecretVersion { get; set; }
```

- *Type:* string

Optional. SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#private_key_secret_version DeveloperConnectConnection#private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig"></a>

```csharp
public DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig ServiceDirectoryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}

---

##### `SslCaCertificate`<sup>Optional</sup> <a name="SslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.sslCaCertificate"></a>

```csharp
public string SslCaCertificate { get; set; }
```

- *Type:* string

Optional. SSL certificate to use for requests to GitHub Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}

---

##### `WebhookSecretSecretVersion`<sup>Optional</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; set; }
```

- *Type:* string

Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig <a name="DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig {
    string Service
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}

---

### DeveloperConnectConnectionGitlabConfig <a name="DeveloperConnectConnectionGitlabConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabConfig {
    DeveloperConnectConnectionGitlabConfigAuthorizerCredential AuthorizerCredential,
    DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential ReadAuthorizerCredential,
    string WebhookSecretSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | Required. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.authorizerCredential"></a>

```csharp
public DeveloperConnectConnectionGitlabConfigAuthorizerCredential AuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.readAuthorizerCredential"></a>

```csharp
public DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential ReadAuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; set; }
```

- *Type:* string

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabConfigAuthorizerCredential <a name="DeveloperConnectConnectionGitlabConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabConfigAuthorizerCredential {
    string UserTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential <a name="DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential {
    string UserTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabEnterpriseConfig <a name="DeveloperConnectConnectionGitlabEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabEnterpriseConfig {
    DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential AuthorizerCredential,
    string HostUri,
    DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential ReadAuthorizerCredential,
    string WebhookSecretSecretVersion,
    DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig ServiceDirectoryConfig = null,
    string SslCaCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.hostUri">HostUri</a></code> | <code>string</code> | Required. The URI of the GitLab Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.sslCaCertificate">SslCaCertificate</a></code> | <code>string</code> | Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.authorizerCredential"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential AuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.hostUri"></a>

```csharp
public string HostUri { get; set; }
```

- *Type:* string

Required. The URI of the GitLab Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.readAuthorizerCredential"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential ReadAuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; set; }
```

- *Type:* string

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.serviceDirectoryConfig"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig ServiceDirectoryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}

---

##### `SslCaCertificate`<sup>Optional</sup> <a name="SslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.sslCaCertificate"></a>

```csharp
public string SslCaCertificate { get; set; }
```

- *Type:* string

Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}

---

### DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential <a name="DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential {
    string UserTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential <a name="DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential {
    string UserTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig <a name="DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig {
    string Service
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}

---

### DeveloperConnectConnectionInstallationState <a name="DeveloperConnectConnectionInstallationState" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationState.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionInstallationState {

};
```


### DeveloperConnectConnectionTimeouts <a name="DeveloperConnectConnectionTimeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#create DeveloperConnectConnection#create}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#delete DeveloperConnectConnection#delete}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#update DeveloperConnectConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#create DeveloperConnectConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#delete DeveloperConnectConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#update DeveloperConnectConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```csharp
public string UserTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionBitbucketCloudConfigOutputReference <a name="DeveloperConnectConnectionBitbucketCloudConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketCloudConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential"></a>

```csharp
private void PutAuthorizerCredential(DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential"></a>

```csharp
private void PutReadAuthorizerCredential(DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspace">Workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential"></a>

```csharp
public DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference AuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential"></a>

```csharp
public DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference ReadAuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput"></a>

```csharp
public DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential AuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```csharp
public DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential ReadAuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```csharp
public string WebhookSecretSecretVersionInput { get; }
```

- *Type:* string

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspaceInput"></a>

```csharp
public string WorkspaceInput { get; }
```

- *Type:* string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; }
```

- *Type:* string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspace"></a>

```csharp
public string Workspace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionBitbucketCloudConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a>

---


### DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```csharp
public string UserTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---


### DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```csharp
public string UserTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference <a name="DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetSslCaCertificate">ResetSslCaCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential"></a>

```csharp
private void PutAuthorizerCredential(DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential"></a>

```csharp
private void PutReadAuthorizerCredential(DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig"></a>

```csharp
private void PutServiceDirectoryConfig(DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig"></a>

```csharp
private void ResetServiceDirectoryConfig()
```

##### `ResetSslCaCertificate` <a name="ResetSslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetSslCaCertificate"></a>

```csharp
private void ResetSslCaCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion">ServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificateInput">SslCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUri">HostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference AuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference ReadAuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a>

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion"></a>

```csharp
public string ServerVersion { get; }
```

- *Type:* string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference ServiceDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential AuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput"></a>

```csharp
public string HostUriInput { get; }
```

- *Type:* string

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential ReadAuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig ServiceDirectoryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---

##### `SslCaCertificateInput`<sup>Optional</sup> <a name="SslCaCertificateInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificateInput"></a>

```csharp
public string SslCaCertificateInput { get; }
```

- *Type:* string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```csharp
public string WebhookSecretSecretVersionInput { get; }
```

- *Type:* string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUri"></a>

```csharp
public string HostUri { get; }
```

- *Type:* string

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificate"></a>

```csharp
public string SslCaCertificate { get; }
```

- *Type:* string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a>

---


### DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```csharp
public string UserTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---


### DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference <a name="DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---


### DeveloperConnectConnectionCryptoKeyConfigOutputReference <a name="DeveloperConnectConnectionCryptoKeyConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionCryptoKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReferenceInput">KeyReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReference">KeyReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyReferenceInput`<sup>Optional</sup> <a name="KeyReferenceInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReferenceInput"></a>

```csharp
public string KeyReferenceInput { get; }
```

- *Type:* string

---

##### `KeyReference`<sup>Required</sup> <a name="KeyReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReference"></a>

```csharp
public string KeyReference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionCryptoKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a>

---


### DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput">OauthTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion">OauthTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `OauthTokenSecretVersionInput`<sup>Optional</sup> <a name="OauthTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput"></a>

```csharp
public string OauthTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `OauthTokenSecretVersion`<sup>Required</sup> <a name="OauthTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion"></a>

```csharp
public string OauthTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionGithubConfigAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionGithubConfigOutputReference <a name="DeveloperConnectConnectionGithubConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGithubConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId">ResetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential">ResetAuthorizerCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential"></a>

```csharp
private void PutAuthorizerCredential(DeveloperConnectConnectionGithubConfigAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---

##### `ResetAppInstallationId` <a name="ResetAppInstallationId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId"></a>

```csharp
private void ResetAppInstallationId()
```

##### `ResetAuthorizerCredential` <a name="ResetAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential"></a>

```csharp
private void ResetAuthorizerCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.installationUri">InstallationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput">AppInstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput">GithubAppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId">AppInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.githubApp">GithubApp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential"></a>

```csharp
public DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference AuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a>

---

##### `InstallationUri`<sup>Required</sup> <a name="InstallationUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.installationUri"></a>

```csharp
public string InstallationUri { get; }
```

- *Type:* string

---

##### `AppInstallationIdInput`<sup>Optional</sup> <a name="AppInstallationIdInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput"></a>

```csharp
public string AppInstallationIdInput { get; }
```

- *Type:* string

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput"></a>

```csharp
public DeveloperConnectConnectionGithubConfigAuthorizerCredential AuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---

##### `GithubAppInput`<sup>Optional</sup> <a name="GithubAppInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput"></a>

```csharp
public string GithubAppInput { get; }
```

- *Type:* string

---

##### `AppInstallationId`<sup>Required</sup> <a name="AppInstallationId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId"></a>

```csharp
public string AppInstallationId { get; }
```

- *Type:* string

---

##### `GithubApp`<sup>Required</sup> <a name="GithubApp" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.githubApp"></a>

```csharp
public string GithubApp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionGithubConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a>

---


### DeveloperConnectConnectionGithubEnterpriseConfigOutputReference <a name="DeveloperConnectConnectionGithubEnterpriseConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGithubEnterpriseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppId">ResetAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId">ResetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion">ResetPrivateKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetSslCaCertificate">ResetSslCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion">ResetWebhookSecretSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```csharp
private void PutServiceDirectoryConfig(DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `ResetAppId` <a name="ResetAppId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppId"></a>

```csharp
private void ResetAppId()
```

##### `ResetAppInstallationId` <a name="ResetAppInstallationId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId"></a>

```csharp
private void ResetAppInstallationId()
```

##### `ResetPrivateKeySecretVersion` <a name="ResetPrivateKeySecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion"></a>

```csharp
private void ResetPrivateKeySecretVersion()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```csharp
private void ResetServiceDirectoryConfig()
```

##### `ResetSslCaCertificate` <a name="ResetSslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetSslCaCertificate"></a>

```csharp
private void ResetSslCaCertificate()
```

##### `ResetWebhookSecretSecretVersion` <a name="ResetWebhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion"></a>

```csharp
private void ResetWebhookSecretSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appSlug">AppSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.installationUri">InstallationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serverVersion">ServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput">AppInstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput">PrivateKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificateInput">SslCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId">AppInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUri">HostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion">PrivateKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppSlug`<sup>Required</sup> <a name="AppSlug" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appSlug"></a>

```csharp
public string AppSlug { get; }
```

- *Type:* string

---

##### `InstallationUri`<sup>Required</sup> <a name="InstallationUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.installationUri"></a>

```csharp
public string InstallationUri { get; }
```

- *Type:* string

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serverVersion"></a>

```csharp
public string ServerVersion { get; }
```

- *Type:* string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```csharp
public DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference ServiceDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `AppInstallationIdInput`<sup>Optional</sup> <a name="AppInstallationIdInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput"></a>

```csharp
public string AppInstallationIdInput { get; }
```

- *Type:* string

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput"></a>

```csharp
public string HostUriInput { get; }
```

- *Type:* string

---

##### `PrivateKeySecretVersionInput`<sup>Optional</sup> <a name="PrivateKeySecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput"></a>

```csharp
public string PrivateKeySecretVersionInput { get; }
```

- *Type:* string

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```csharp
public DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig ServiceDirectoryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `SslCaCertificateInput`<sup>Optional</sup> <a name="SslCaCertificateInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificateInput"></a>

```csharp
public string SslCaCertificateInput { get; }
```

- *Type:* string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```csharp
public string WebhookSecretSecretVersionInput { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppInstallationId`<sup>Required</sup> <a name="AppInstallationId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId"></a>

```csharp
public string AppInstallationId { get; }
```

- *Type:* string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUri"></a>

```csharp
public string HostUri { get; }
```

- *Type:* string

---

##### `PrivateKeySecretVersion`<sup>Required</sup> <a name="PrivateKeySecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion"></a>

```csharp
public string PrivateKeySecretVersion { get; }
```

- *Type:* string

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificate"></a>

```csharp
public string SslCaCertificate { get; }
```

- *Type:* string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionGithubEnterpriseConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a>

---


### DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference <a name="DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---


### DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```csharp
public string UserTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionGitlabConfigAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionGitlabConfigOutputReference <a name="DeveloperConnectConnectionGitlabConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential"></a>

```csharp
private void PutAuthorizerCredential(DeveloperConnectConnectionGitlabConfigAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential"></a>

```csharp
private void PutReadAuthorizerCredential(DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredential"></a>

```csharp
public DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference AuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredential"></a>

```csharp
public DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference ReadAuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredentialInput"></a>

```csharp
public DeveloperConnectConnectionGitlabConfigAuthorizerCredential AuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```csharp
public DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential ReadAuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```csharp
public string WebhookSecretSecretVersionInput { get; }
```

- *Type:* string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionGitlabConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a>

---


### DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```csharp
public string UserTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---


### DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```csharp
public string UserTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference <a name="DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetSslCaCertificate">ResetSslCaCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential"></a>

```csharp
private void PutAuthorizerCredential(DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential"></a>

```csharp
private void PutReadAuthorizerCredential(DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```csharp
private void PutServiceDirectoryConfig(DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```csharp
private void ResetServiceDirectoryConfig()
```

##### `ResetSslCaCertificate` <a name="ResetSslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetSslCaCertificate"></a>

```csharp
private void ResetSslCaCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serverVersion">ServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificateInput">SslCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUri">HostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredential"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference AuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredential"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference ReadAuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference</a>

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serverVersion"></a>

```csharp
public string ServerVersion { get; }
```

- *Type:* string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference ServiceDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredentialInput"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential AuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUriInput"></a>

```csharp
public string HostUriInput { get; }
```

- *Type:* string

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential ReadAuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig ServiceDirectoryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---

##### `SslCaCertificateInput`<sup>Optional</sup> <a name="SslCaCertificateInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificateInput"></a>

```csharp
public string SslCaCertificateInput { get; }
```

- *Type:* string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```csharp
public string WebhookSecretSecretVersionInput { get; }
```

- *Type:* string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUri"></a>

```csharp
public string HostUri { get; }
```

- *Type:* string

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificate"></a>

```csharp
public string SslCaCertificate { get; }
```

- *Type:* string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a>

---


### DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```csharp
public string UserTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---


### DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference <a name="DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---


### DeveloperConnectConnectionInstallationStateList <a name="DeveloperConnectConnectionInstallationStateList" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionInstallationStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.get"></a>

```csharp
private DeveloperConnectConnectionInstallationStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DeveloperConnectConnectionInstallationStateOutputReference <a name="DeveloperConnectConnectionInstallationStateOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionInstallationStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.actionUri">ActionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationState">DeveloperConnectConnectionInstallationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionUri`<sup>Required</sup> <a name="ActionUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.actionUri"></a>

```csharp
public string ActionUri { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectConnectionInstallationState InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationState">DeveloperConnectConnectionInstallationState</a>

---


### DeveloperConnectConnectionTimeoutsOutputReference <a name="DeveloperConnectConnectionTimeoutsOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



