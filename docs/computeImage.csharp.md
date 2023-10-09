# `google_compute_image`

Refer to the Terraform Registory for docs: [`google_compute_image`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image).

# `computeImage` Submodule <a name="`computeImage` Submodule" id="@cdktf/provider-google.computeImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeImage <a name="ComputeImage" id="@cdktf/provider-google.computeImage.ComputeImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image google_compute_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeImage(Construct Scope, string Id, ComputeImageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig">ComputeImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageConfig">ComputeImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putGuestOsFeatures">PutGuestOsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putImageEncryptionKey">PutImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putRawDisk">PutRawDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetFamily">ResetFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetGuestOsFeatures">ResetGuestOsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetImageEncryptionKey">ResetImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetLicenses">ResetLicenses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetRawDisk">ResetRawDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceDisk">ResetSourceDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceImage">ResetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetStorageLocations">ResetStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeImage.ComputeImage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeImage.ComputeImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeImage.ComputeImage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeImage.ComputeImage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeImage.ComputeImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeImage.ComputeImage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeImage.ComputeImage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeImage.ComputeImage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutGuestOsFeatures` <a name="PutGuestOsFeatures" id="@cdktf/provider-google.computeImage.ComputeImage.putGuestOsFeatures"></a>

```csharp
private void PutGuestOsFeatures(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeImage.ComputeImage.putGuestOsFeatures.parameter.value"></a>

- *Type:* object

---

##### `PutImageEncryptionKey` <a name="PutImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.putImageEncryptionKey"></a>

```csharp
private void PutImageEncryptionKey(ComputeImageImageEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeImage.ComputeImage.putImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

---

##### `PutRawDisk` <a name="PutRawDisk" id="@cdktf/provider-google.computeImage.ComputeImage.putRawDisk"></a>

```csharp
private void PutRawDisk(ComputeImageRawDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeImage.ComputeImage.putRawDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeImage.ComputeImage.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeImageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeImage.ComputeImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeImage.ComputeImage.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google.computeImage.ComputeImage.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetFamily` <a name="ResetFamily" id="@cdktf/provider-google.computeImage.ComputeImage.resetFamily"></a>

```csharp
private void ResetFamily()
```

##### `ResetGuestOsFeatures` <a name="ResetGuestOsFeatures" id="@cdktf/provider-google.computeImage.ComputeImage.resetGuestOsFeatures"></a>

```csharp
private void ResetGuestOsFeatures()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeImage.ComputeImage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageEncryptionKey` <a name="ResetImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.resetImageEncryptionKey"></a>

```csharp
private void ResetImageEncryptionKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.computeImage.ComputeImage.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLicenses` <a name="ResetLicenses" id="@cdktf/provider-google.computeImage.ComputeImage.resetLicenses"></a>

```csharp
private void ResetLicenses()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeImage.ComputeImage.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRawDisk` <a name="ResetRawDisk" id="@cdktf/provider-google.computeImage.ComputeImage.resetRawDisk"></a>

```csharp
private void ResetRawDisk()
```

##### `ResetSourceDisk` <a name="ResetSourceDisk" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceDisk"></a>

```csharp
private void ResetSourceDisk()
```

##### `ResetSourceImage` <a name="ResetSourceImage" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceImage"></a>

```csharp
private void ResetSourceImage()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceSnapshot"></a>

```csharp
private void ResetSourceSnapshot()
```

##### `ResetStorageLocations` <a name="ResetStorageLocations" id="@cdktf/provider-google.computeImage.ComputeImage.resetStorageLocations"></a>

```csharp
private void ResetStorageLocations()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeImage.ComputeImage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeImage.ComputeImage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeImage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeImage.ComputeImage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeImage.ComputeImage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeImage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeImage.ComputeImage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeImage.ComputeImage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeImage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeImage.ComputeImage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.archiveSizeBytes">ArchiveSizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.guestOsFeatures">GuestOsFeatures</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList">ComputeImageGuestOsFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.imageEncryptionKey">ImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference">ComputeImageImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.rawDisk">RawDisk</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference">ComputeImageRawDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference">ComputeImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.familyInput">FamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.guestOsFeaturesInput">GuestOsFeaturesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.imageEncryptionKeyInput">ImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.licensesInput">LicensesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.rawDiskInput">RawDiskInput</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskInput">SourceDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageInput">SourceImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.storageLocationsInput">StorageLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.licenses">Licenses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceDisk">SourceDisk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceImage">SourceImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.storageLocations">StorageLocations</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeImage.ComputeImage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeImage.ComputeImage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeImage.ComputeImage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeImage.ComputeImage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeImage.ComputeImage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeImage.ComputeImage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeImage.ComputeImage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeImage.ComputeImage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeImage.ComputeImage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeImage.ComputeImage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeImage.ComputeImage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeImage.ComputeImage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeImage.ComputeImage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ArchiveSizeBytes`<sup>Required</sup> <a name="ArchiveSizeBytes" id="@cdktf/provider-google.computeImage.ComputeImage.property.archiveSizeBytes"></a>

```csharp
public double ArchiveSizeBytes { get; }
```

- *Type:* double

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeImage.ComputeImage.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.computeImage.ComputeImage.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GuestOsFeatures`<sup>Required</sup> <a name="GuestOsFeatures" id="@cdktf/provider-google.computeImage.ComputeImage.property.guestOsFeatures"></a>

```csharp
public ComputeImageGuestOsFeaturesList GuestOsFeatures { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList">ComputeImageGuestOsFeaturesList</a>

---

##### `ImageEncryptionKey`<sup>Required</sup> <a name="ImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImage.property.imageEncryptionKey"></a>

```csharp
public ComputeImageImageEncryptionKeyOutputReference ImageEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference">ComputeImageImageEncryptionKeyOutputReference</a>

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google.computeImage.ComputeImage.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `RawDisk`<sup>Required</sup> <a name="RawDisk" id="@cdktf/provider-google.computeImage.ComputeImage.property.rawDisk"></a>

```csharp
public ComputeImageRawDiskOutputReference RawDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference">ComputeImageRawDiskOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeImage.ComputeImage.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.computeImage.ComputeImage.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeImage.ComputeImage.property.timeouts"></a>

```csharp
public ComputeImageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference">ComputeImageTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.familyInput"></a>

```csharp
public string FamilyInput { get; }
```

- *Type:* string

---

##### `GuestOsFeaturesInput`<sup>Optional</sup> <a name="GuestOsFeaturesInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.guestOsFeaturesInput"></a>

```csharp
public object GuestOsFeaturesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageEncryptionKeyInput`<sup>Optional</sup> <a name="ImageEncryptionKeyInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.imageEncryptionKeyInput"></a>

```csharp
public ComputeImageImageEncryptionKey ImageEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LicensesInput`<sup>Optional</sup> <a name="LicensesInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.licensesInput"></a>

```csharp
public string[] LicensesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RawDiskInput`<sup>Optional</sup> <a name="RawDiskInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.rawDiskInput"></a>

```csharp
public ComputeImageRawDisk RawDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

---

##### `SourceDiskInput`<sup>Optional</sup> <a name="SourceDiskInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskInput"></a>

```csharp
public string SourceDiskInput { get; }
```

- *Type:* string

---

##### `SourceImageInput`<sup>Optional</sup> <a name="SourceImageInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageInput"></a>

```csharp
public string SourceImageInput { get; }
```

- *Type:* string

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotInput"></a>

```csharp
public string SourceSnapshotInput { get; }
```

- *Type:* string

---

##### `StorageLocationsInput`<sup>Optional</sup> <a name="StorageLocationsInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.storageLocationsInput"></a>

```csharp
public string[] StorageLocationsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeImage.ComputeImage.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeImage.ComputeImage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.computeImage.ComputeImage.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-google.computeImage.ComputeImage.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeImage.ComputeImage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.computeImage.ComputeImage.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Licenses`<sup>Required</sup> <a name="Licenses" id="@cdktf/provider-google.computeImage.ComputeImage.property.licenses"></a>

```csharp
public string[] Licenses { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeImage.ComputeImage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeImage.ComputeImage.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SourceDisk`<sup>Required</sup> <a name="SourceDisk" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceDisk"></a>

```csharp
public string SourceDisk { get; }
```

- *Type:* string

---

##### `SourceImage`<sup>Required</sup> <a name="SourceImage" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceImage"></a>

```csharp
public string SourceImage { get; }
```

- *Type:* string

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; }
```

- *Type:* string

---

##### `StorageLocations`<sup>Required</sup> <a name="StorageLocations" id="@cdktf/provider-google.computeImage.ComputeImage.property.storageLocations"></a>

```csharp
public string[] StorageLocations { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeImage.ComputeImage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeImageConfig <a name="ComputeImageConfig" id="@cdktf/provider-google.computeImage.ComputeImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeImageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    double DiskSizeGb = null,
    string Family = null,
    object GuestOsFeatures = null,
    string Id = null,
    ComputeImageImageEncryptionKey ImageEncryptionKey = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string[] Licenses = null,
    string Project = null,
    ComputeImageRawDisk RawDisk = null,
    string SourceDisk = null,
    string SourceImage = null,
    string SourceSnapshot = null,
    string[] StorageLocations = null,
    ComputeImageTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Size of the image when restored onto a persistent disk (in GB). |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.family">Family</a></code> | <code>string</code> | The name of the image family to which this image belongs. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.guestOsFeatures">GuestOsFeatures</a></code> | <code>object</code> | guest_os_features block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#id ComputeImage#id}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.imageEncryptionKey">ImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to apply to this Image. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.licenses">Licenses</a></code> | <code>string[]</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#project ComputeImage#project}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.rawDisk">RawDisk</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | raw_disk block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceDisk">SourceDisk</a></code> | <code>string</code> | The source disk to create this image based on. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceImage">SourceImage</a></code> | <code>string</code> | URL of the source image used to create this image. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | URL of the source snapshot used to create this image. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.storageLocations">StorageLocations</a></code> | <code>string[]</code> | Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#name ComputeImage#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#description ComputeImage#description}

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Size of the image when restored onto a persistent disk (in GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#disk_size_gb ComputeImage#disk_size_gb}

---

##### `Family`<sup>Optional</sup> <a name="Family" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.family"></a>

```csharp
public string Family { get; set; }
```

- *Type:* string

The name of the image family to which this image belongs.

You can
create disks by specifying an image family instead of a specific
image name. The image family always returns its latest image that is
not deprecated. The name of the image family must comply with
RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#family ComputeImage#family}

---

##### `GuestOsFeatures`<sup>Optional</sup> <a name="GuestOsFeatures" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.guestOsFeatures"></a>

```csharp
public object GuestOsFeatures { get; set; }
```

- *Type:* object

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#guest_os_features ComputeImage#guest_os_features}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#id ComputeImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageEncryptionKey`<sup>Optional</sup> <a name="ImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.imageEncryptionKey"></a>

```csharp
public ComputeImageImageEncryptionKey ImageEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#image_encryption_key ComputeImage#image_encryption_key}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to apply to this Image.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#labels ComputeImage#labels}

---

##### `Licenses`<sup>Optional</sup> <a name="Licenses" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.licenses"></a>

```csharp
public string[] Licenses { get; set; }
```

- *Type:* string[]

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#licenses ComputeImage#licenses}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#project ComputeImage#project}.

---

##### `RawDisk`<sup>Optional</sup> <a name="RawDisk" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.rawDisk"></a>

```csharp
public ComputeImageRawDisk RawDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

raw_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#raw_disk ComputeImage#raw_disk}

---

##### `SourceDisk`<sup>Optional</sup> <a name="SourceDisk" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceDisk"></a>

```csharp
public string SourceDisk { get; set; }
```

- *Type:* string

The source disk to create this image based on.

You must provide either this property or the
rawDisk.source property but not both to create an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#source_disk ComputeImage#source_disk}

---

##### `SourceImage`<sup>Optional</sup> <a name="SourceImage" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceImage"></a>

```csharp
public string SourceImage { get; set; }
```

- *Type:* string

URL of the source image used to create this image.

In order to create an image, you must provide the full or partial
URL of one of the following:

* The selfLink URL
* This property
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#source_image ComputeImage#source_image}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; set; }
```

- *Type:* string

URL of the source snapshot used to create this image.

In order to create an image, you must provide the full or partial URL of one of the following:

* The selfLink URL
* This property
* The sourceImage URL
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#source_snapshot ComputeImage#source_snapshot}

---

##### `StorageLocations`<sup>Optional</sup> <a name="StorageLocations" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.storageLocations"></a>

```csharp
public string[] StorageLocations { get; set; }
```

- *Type:* string[]

Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#storage_locations ComputeImage#storage_locations}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.timeouts"></a>

```csharp
public ComputeImageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#timeouts ComputeImage#timeouts}

---

### ComputeImageGuestOsFeatures <a name="ComputeImageGuestOsFeatures" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeImageGuestOsFeatures {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures.property.type">Type</a></code> | <code>string</code> | The type of supported feature. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of supported feature.

Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Possible values: ["MULTI_IP_SUBNET", "SECURE_BOOT", "SEV_CAPABLE", "UEFI_COMPATIBLE", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "GVNIC", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "SUSPEND_RESUME_COMPATIBLE", "TDX_CAPABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#type ComputeImage#type}

---

### ComputeImageImageEncryptionKey <a name="ComputeImageImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeImageImageEncryptionKey {
    string KmsKeySelfLink = null,
    string KmsKeyServiceAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

### ComputeImageRawDisk <a name="ComputeImageRawDisk" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeImageRawDisk {
    string Source,
    string ContainerType = null,
    string Sha1 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.source">Source</a></code> | <code>string</code> | The full Google Cloud Storage URL where disk storage is stored You must provide either this property or the sourceDisk property but not both. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.containerType">ContainerType</a></code> | <code>string</code> | The format used to encode and transmit the block device, which should be TAR. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.sha1">Sha1</a></code> | <code>string</code> | An optional SHA1 checksum of the disk image before unpackaging. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The full Google Cloud Storage URL where disk storage is stored You must provide either this property or the sourceDisk property but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#source ComputeImage#source}

---

##### `ContainerType`<sup>Optional</sup> <a name="ContainerType" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.containerType"></a>

```csharp
public string ContainerType { get; set; }
```

- *Type:* string

The format used to encode and transmit the block device, which should be TAR.

This is just a container and transmission format
and not a runtime format. Provided by the client when the disk
image is created. Default value: "TAR" Possible values: ["TAR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#container_type ComputeImage#container_type}

---

##### `Sha1`<sup>Optional</sup> <a name="Sha1" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.sha1"></a>

```csharp
public string Sha1 { get; set; }
```

- *Type:* string

An optional SHA1 checksum of the disk image before unpackaging.

This is provided by the client when the disk image is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#sha1 ComputeImage#sha1}

---

### ComputeImageTimeouts <a name="ComputeImageTimeouts" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeImageTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#create ComputeImage#create}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#delete ComputeImage#delete}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#update ComputeImage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#create ComputeImage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#delete ComputeImage#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_image#update ComputeImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeImageGuestOsFeaturesList <a name="ComputeImageGuestOsFeaturesList" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeImageGuestOsFeaturesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.get"></a>

```csharp
private ComputeImageGuestOsFeaturesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeImageGuestOsFeaturesOutputReference <a name="ComputeImageGuestOsFeaturesOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeImageGuestOsFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeImageImageEncryptionKeyOutputReference <a name="ComputeImageImageEncryptionKeyOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeImageImageEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```csharp
private void ResetKmsKeyServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public ComputeImageImageEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

---


### ComputeImageRawDiskOutputReference <a name="ComputeImageRawDiskOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeImageRawDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetContainerType">ResetContainerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetSha1">ResetSha1</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerType` <a name="ResetContainerType" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetContainerType"></a>

```csharp
private void ResetContainerType()
```

##### `ResetSha1` <a name="ResetSha1" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetSha1"></a>

```csharp
private void ResetSha1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerTypeInput">ContainerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1Input">Sha1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerType">ContainerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1">Sha1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerTypeInput`<sup>Optional</sup> <a name="ContainerTypeInput" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerTypeInput"></a>

```csharp
public string ContainerTypeInput { get; }
```

- *Type:* string

---

##### `Sha1Input`<sup>Optional</sup> <a name="Sha1Input" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1Input"></a>

```csharp
public string Sha1Input { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerType"></a>

```csharp
public string ContainerType { get; }
```

- *Type:* string

---

##### `Sha1`<sup>Required</sup> <a name="Sha1" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1"></a>

```csharp
public string Sha1 { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.internalValue"></a>

```csharp
public ComputeImageRawDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

---


### ComputeImageTimeoutsOutputReference <a name="ComputeImageTimeoutsOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeImageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



