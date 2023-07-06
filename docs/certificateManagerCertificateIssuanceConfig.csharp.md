# `google_certificate_manager_certificate_issuance_config`

Refer to the Terraform Registory for docs: [`google_certificate_manager_certificate_issuance_config`](https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config).

# `certificateManagerCertificateIssuanceConfig` Submodule <a name="`certificateManagerCertificateIssuanceConfig` Submodule" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerCertificateIssuanceConfig <a name="CertificateManagerCertificateIssuanceConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config google_certificate_manager_certificate_issuance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateIssuanceConfig(Construct Scope, string Id, CertificateManagerCertificateIssuanceConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig">CertificateManagerCertificateIssuanceConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig">CertificateManagerCertificateIssuanceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putCertificateAuthorityConfig">PutCertificateAuthorityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCertificateAuthorityConfig` <a name="PutCertificateAuthorityConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putCertificateAuthorityConfig"></a>

```csharp
private void PutCertificateAuthorityConfig(CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putCertificateAuthorityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(CertificateManagerCertificateIssuanceConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts">CertificateManagerCertificateIssuanceConfigTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerCertificateIssuanceConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerCertificateIssuanceConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CertificateManagerCertificateIssuanceConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfig">CertificateAuthorityConfig</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference">CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfigInput">CertificateAuthorityConfigInput</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.lifetimeInput">LifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentageInput">RotationWindowPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.lifetime">Lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentage">RotationWindowPercentage</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CertificateAuthorityConfig`<sup>Required</sup> <a name="CertificateAuthorityConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfig"></a>

```csharp
public CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference CertificateAuthorityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.timeouts"></a>

```csharp
public CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference">CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CertificateAuthorityConfigInput`<sup>Optional</sup> <a name="CertificateAuthorityConfigInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfigInput"></a>

```csharp
public CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig CertificateAuthorityConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.keyAlgorithmInput"></a>

```csharp
public string KeyAlgorithmInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.lifetimeInput"></a>

```csharp
public string LifetimeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RotationWindowPercentageInput`<sup>Optional</sup> <a name="RotationWindowPercentageInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentageInput"></a>

```csharp
public double RotationWindowPercentageInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.lifetime"></a>

```csharp
public string Lifetime { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RotationWindowPercentage`<sup>Required</sup> <a name="RotationWindowPercentage" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentage"></a>

```csharp
public double RotationWindowPercentage { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig <a name="CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig {
    CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig CertificateAuthorityServiceConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig.property.certificateAuthorityServiceConfig">CertificateAuthorityServiceConfig</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a></code> | certificate_authority_service_config block. |

---

##### `CertificateAuthorityServiceConfig`<sup>Optional</sup> <a name="CertificateAuthorityServiceConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig.property.certificateAuthorityServiceConfig"></a>

```csharp
public CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig CertificateAuthorityServiceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

certificate_authority_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#certificate_authority_service_config CertificateManagerCertificateIssuanceConfig#certificate_authority_service_config}

---

### CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig <a name="CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig {
    string CaPool
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig.property.caPool">CaPool</a></code> | <code>string</code> | A CA pool resource used to issue a certificate. |

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig.property.caPool"></a>

```csharp
public string CaPool { get; set; }
```

- *Type:* string

A CA pool resource used to issue a certificate.

The CA pool string has a relative resource path following the form
"projects/{project}/locations/{location}/caPools/{caPool}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#ca_pool CertificateManagerCertificateIssuanceConfig#ca_pool}

---

### CertificateManagerCertificateIssuanceConfigConfig <a name="CertificateManagerCertificateIssuanceConfigConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateIssuanceConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig CertificateAuthorityConfig,
    string KeyAlgorithm,
    string Lifetime,
    string Name,
    double RotationWindowPercentage,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    CertificateManagerCertificateIssuanceConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.certificateAuthorityConfig">CertificateAuthorityConfig</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a></code> | certificate_authority_config block. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"]. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.lifetime">Lifetime</a></code> | <code>string</code> | Lifetime of issued certificates. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.name">Name</a></code> | <code>string</code> | A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.rotationWindowPercentage">RotationWindowPercentage</a></code> | <code>double</code> | It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.description">Description</a></code> | <code>string</code> | One or more paragraphs of text description of a CertificateIssuanceConfig. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#id CertificateManagerCertificateIssuanceConfig#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | 'Set of label tags associated with the CertificateIssuanceConfig resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.location">Location</a></code> | <code>string</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#project CertificateManagerCertificateIssuanceConfig#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts">CertificateManagerCertificateIssuanceConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CertificateAuthorityConfig`<sup>Required</sup> <a name="CertificateAuthorityConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.certificateAuthorityConfig"></a>

```csharp
public CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig CertificateAuthorityConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

certificate_authority_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#certificate_authority_config CertificateManagerCertificateIssuanceConfig#certificate_authority_config}

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; set; }
```

- *Type:* string

Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#key_algorithm CertificateManagerCertificateIssuanceConfig#key_algorithm}

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.lifetime"></a>

```csharp
public string Lifetime { get; set; }
```

- *Type:* string

Lifetime of issued certificates.

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "1814400s". Valid values are from 21 days (1814400s) to 30 days (2592000s)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#lifetime CertificateManagerCertificateIssuanceConfig#lifetime}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#name CertificateManagerCertificateIssuanceConfig#name}

---

##### `RotationWindowPercentage`<sup>Required</sup> <a name="RotationWindowPercentage" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.rotationWindowPercentage"></a>

```csharp
public double RotationWindowPercentage { get; set; }
```

- *Type:* double

It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate.

Must be a number between 1-99, inclusive.
You must set the rotation window percentage in relation to the certificate lifetime so that certificate renewal occurs at least 7 days after
the certificate has been issued and at least 7 days before it expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#rotation_window_percentage CertificateManagerCertificateIssuanceConfig#rotation_window_percentage}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

One or more paragraphs of text description of a CertificateIssuanceConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#description CertificateManagerCertificateIssuanceConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#id CertificateManagerCertificateIssuanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

'Set of label tags associated with the CertificateIssuanceConfig resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#labels CertificateManagerCertificateIssuanceConfig#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#location CertificateManagerCertificateIssuanceConfig#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#project CertificateManagerCertificateIssuanceConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.timeouts"></a>

```csharp
public CertificateManagerCertificateIssuanceConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts">CertificateManagerCertificateIssuanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#timeouts CertificateManagerCertificateIssuanceConfig#timeouts}

---

### CertificateManagerCertificateIssuanceConfigTimeouts <a name="CertificateManagerCertificateIssuanceConfigTimeouts" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateIssuanceConfigTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#create CertificateManagerCertificateIssuanceConfig#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#delete CertificateManagerCertificateIssuanceConfig#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#create CertificateManagerCertificateIssuanceConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/certificate_manager_certificate_issuance_config#delete CertificateManagerCertificateIssuanceConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference <a name="CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPoolInput">CaPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPool">CaPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaPoolInput`<sup>Optional</sup> <a name="CaPoolInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPoolInput"></a>

```csharp
public string CaPoolInput { get; }
```

- *Type:* string

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPool"></a>

```csharp
public string CaPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.internalValue"></a>

```csharp
public CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

---


### CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference <a name="CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.putCertificateAuthorityServiceConfig">PutCertificateAuthorityServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resetCertificateAuthorityServiceConfig">ResetCertificateAuthorityServiceConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateAuthorityServiceConfig` <a name="PutCertificateAuthorityServiceConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.putCertificateAuthorityServiceConfig"></a>

```csharp
private void PutCertificateAuthorityServiceConfig(CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.putCertificateAuthorityServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

---

##### `ResetCertificateAuthorityServiceConfig` <a name="ResetCertificateAuthorityServiceConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resetCertificateAuthorityServiceConfig"></a>

```csharp
private void ResetCertificateAuthorityServiceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfig">CertificateAuthorityServiceConfig</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfigInput">CertificateAuthorityServiceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityServiceConfig`<sup>Required</sup> <a name="CertificateAuthorityServiceConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfig"></a>

```csharp
public CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference CertificateAuthorityServiceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference</a>

---

##### `CertificateAuthorityServiceConfigInput`<sup>Optional</sup> <a name="CertificateAuthorityServiceConfigInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfigInput"></a>

```csharp
public CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig CertificateAuthorityServiceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.internalValue"></a>

```csharp
public CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

---


### CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference <a name="CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



