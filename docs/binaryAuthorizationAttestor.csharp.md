# `google_binary_authorization_attestor`

Refer to the Terraform Registory for docs: [`google_binary_authorization_attestor`](https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor).

# `binaryAuthorizationAttestor` Submodule <a name="`binaryAuthorizationAttestor` Submodule" id="@cdktf/provider-google.binaryAuthorizationAttestor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BinaryAuthorizationAttestor <a name="BinaryAuthorizationAttestor" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor google_binary_authorization_attestor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationAttestor(Construct Scope, string Id, BinaryAuthorizationAttestorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig">BinaryAuthorizationAttestorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig">BinaryAuthorizationAttestorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.putAttestationAuthorityNote">PutAttestationAuthorityNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAttestationAuthorityNote` <a name="PutAttestationAuthorityNote" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.putAttestationAuthorityNote"></a>

```csharp
private void PutAttestationAuthorityNote(BinaryAuthorizationAttestorAttestationAuthorityNote Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.putAttestationAuthorityNote.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.putTimeouts"></a>

```csharp
private void PutTimeouts(BinaryAuthorizationAttestorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts">BinaryAuthorizationAttestorTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BinaryAuthorizationAttestor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BinaryAuthorizationAttestor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BinaryAuthorizationAttestor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.attestationAuthorityNote">AttestationAuthorityNote</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference">BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference">BinaryAuthorizationAttestorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.attestationAuthorityNoteInput">AttestationAuthorityNoteInput</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AttestationAuthorityNote`<sup>Required</sup> <a name="AttestationAuthorityNote" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.attestationAuthorityNote"></a>

```csharp
public BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference AttestationAuthorityNote { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference">BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.timeouts"></a>

```csharp
public BinaryAuthorizationAttestorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference">BinaryAuthorizationAttestorTimeoutsOutputReference</a>

---

##### `AttestationAuthorityNoteInput`<sup>Optional</sup> <a name="AttestationAuthorityNoteInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.attestationAuthorityNoteInput"></a>

```csharp
public BinaryAuthorizationAttestorAttestationAuthorityNote AttestationAuthorityNoteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BinaryAuthorizationAttestorAttestationAuthorityNote <a name="BinaryAuthorizationAttestorAttestationAuthorityNote" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationAttestorAttestationAuthorityNote {
    string NoteReference,
    object PublicKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote.property.noteReference">NoteReference</a></code> | <code>string</code> | The resource name of a ATTESTATION_AUTHORITY Note, created by the user. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote.property.publicKeys">PublicKeys</a></code> | <code>object</code> | public_keys block. |

---

##### `NoteReference`<sup>Required</sup> <a name="NoteReference" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote.property.noteReference"></a>

```csharp
public string NoteReference { get; set; }
```

- *Type:* string

The resource name of a ATTESTATION_AUTHORITY Note, created by the user.

If the Note is in a different project from the Attestor, it
should be specified in the format 'projects/*/notes/*' (or the legacy
'providers/*/notes/*'). This field may not be updated.
An attestation by this attestor is stored as a Container Analysis
ATTESTATION_AUTHORITY Occurrence that names a container image
and that links to this Note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#note_reference BinaryAuthorizationAttestor#note_reference}

---

##### `PublicKeys`<sup>Optional</sup> <a name="PublicKeys" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote.property.publicKeys"></a>

```csharp
public object PublicKeys { get; set; }
```

- *Type:* object

public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#public_keys BinaryAuthorizationAttestor#public_keys}

---

### BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys <a name="BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys {
    string AsciiArmoredPgpPublicKey = null,
    string Comment = null,
    string Id = null,
    BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey PkixPublicKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.asciiArmoredPgpPublicKey">AsciiArmoredPgpPublicKey</a></code> | <code>string</code> | ASCII-armored representation of a PGP public key, as the entire output by the command 'gpg --export --armor foo@example.com' (either LF or CRLF line endings). When using this field, id should be left blank. The BinAuthz API handlers will calculate the ID and fill it in automatically. BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If id is provided by the caller, it will be overwritten by the API-calculated ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.comment">Comment</a></code> | <code>string</code> | A descriptive comment. This field may be updated. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.id">Id</a></code> | <code>string</code> | The ID of this public key. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.pkixPublicKey">PkixPublicKey</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a></code> | pkix_public_key block. |

---

##### `AsciiArmoredPgpPublicKey`<sup>Optional</sup> <a name="AsciiArmoredPgpPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.asciiArmoredPgpPublicKey"></a>

```csharp
public string AsciiArmoredPgpPublicKey { get; set; }
```

- *Type:* string

ASCII-armored representation of a PGP public key, as the entire output by the command 'gpg --export --armor foo@example.com' (either LF or CRLF line endings). When using this field, id should be left blank. The BinAuthz API handlers will calculate the ID and fill it in automatically. BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If id is provided by the caller, it will be overwritten by the API-calculated ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#ascii_armored_pgp_public_key BinaryAuthorizationAttestor#ascii_armored_pgp_public_key}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

A descriptive comment. This field may be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#comment BinaryAuthorizationAttestor#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of this public key.

Signatures verified by BinAuthz
must include the ID of the public key that can be used to
verify them, and that ID must match the contents of this
field exactly. Additional restrictions on this field can
be imposed based on which public key type is encapsulated.
See the documentation on publicKey cases below for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#id BinaryAuthorizationAttestor#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PkixPublicKey`<sup>Optional</sup> <a name="PkixPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.pkixPublicKey"></a>

```csharp
public BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey PkixPublicKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a>

pkix_public_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#pkix_public_key BinaryAuthorizationAttestor#pkix_public_key}

---

### BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey <a name="BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey {
    string PublicKeyPem = null,
    string SignatureAlgorithm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.property.publicKeyPem">PublicKeyPem</a></code> | <code>string</code> | A PEM-encoded public key, as described in 'https://tools.ietf.org/html/rfc7468#section-13'. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | The signature algorithm used to verify a message against a signature using this key. |

---

##### `PublicKeyPem`<sup>Optional</sup> <a name="PublicKeyPem" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.property.publicKeyPem"></a>

```csharp
public string PublicKeyPem { get; set; }
```

- *Type:* string

A PEM-encoded public key, as described in 'https://tools.ietf.org/html/rfc7468#section-13'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#public_key_pem BinaryAuthorizationAttestor#public_key_pem}

---

##### `SignatureAlgorithm`<sup>Optional</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; set; }
```

- *Type:* string

The signature algorithm used to verify a message against a signature using this key.

These signature algorithm must
match the structure and any object identifiers encoded in
publicKeyPem (i.e. this algorithm must match that of the
public key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#signature_algorithm BinaryAuthorizationAttestor#signature_algorithm}

---

### BinaryAuthorizationAttestorConfig <a name="BinaryAuthorizationAttestorConfig" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationAttestorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    BinaryAuthorizationAttestorAttestationAuthorityNote AttestationAuthorityNote,
    string Name,
    string Description = null,
    string Id = null,
    string Project = null,
    BinaryAuthorizationAttestorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.attestationAuthorityNote">AttestationAuthorityNote</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a></code> | attestation_authority_note block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.name">Name</a></code> | <code>string</code> | The resource name. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.description">Description</a></code> | <code>string</code> | A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#id BinaryAuthorizationAttestor#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#project BinaryAuthorizationAttestor#project}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts">BinaryAuthorizationAttestorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AttestationAuthorityNote`<sup>Required</sup> <a name="AttestationAuthorityNote" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.attestationAuthorityNote"></a>

```csharp
public BinaryAuthorizationAttestorAttestationAuthorityNote AttestationAuthorityNote { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a>

attestation_authority_note block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#attestation_authority_note BinaryAuthorizationAttestor#attestation_authority_note}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#name BinaryAuthorizationAttestor#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#description BinaryAuthorizationAttestor#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#id BinaryAuthorizationAttestor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#project BinaryAuthorizationAttestor#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.timeouts"></a>

```csharp
public BinaryAuthorizationAttestorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts">BinaryAuthorizationAttestorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#timeouts BinaryAuthorizationAttestor#timeouts}

---

### BinaryAuthorizationAttestorTimeouts <a name="BinaryAuthorizationAttestorTimeouts" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationAttestorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#create BinaryAuthorizationAttestor#create}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#delete BinaryAuthorizationAttestor#delete}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#update BinaryAuthorizationAttestor#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#create BinaryAuthorizationAttestor#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#delete BinaryAuthorizationAttestor#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/binary_authorization_attestor#update BinaryAuthorizationAttestor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference <a name="BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.putPublicKeys">PutPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.resetPublicKeys">ResetPublicKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicKeys` <a name="PutPublicKeys" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.putPublicKeys"></a>

```csharp
private void PutPublicKeys(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.putPublicKeys.parameter.value"></a>

- *Type:* object

---

##### `ResetPublicKeys` <a name="ResetPublicKeys" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.resetPublicKeys"></a>

```csharp
private void ResetPublicKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.delegationServiceAccountEmail">DelegationServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.publicKeys">PublicKeys</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.noteReferenceInput">NoteReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.publicKeysInput">PublicKeysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.noteReference">NoteReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DelegationServiceAccountEmail`<sup>Required</sup> <a name="DelegationServiceAccountEmail" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.delegationServiceAccountEmail"></a>

```csharp
public string DelegationServiceAccountEmail { get; }
```

- *Type:* string

---

##### `PublicKeys`<sup>Required</sup> <a name="PublicKeys" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.publicKeys"></a>

```csharp
public BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList PublicKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList</a>

---

##### `NoteReferenceInput`<sup>Optional</sup> <a name="NoteReferenceInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.noteReferenceInput"></a>

```csharp
public string NoteReferenceInput { get; }
```

- *Type:* string

---

##### `PublicKeysInput`<sup>Optional</sup> <a name="PublicKeysInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.publicKeysInput"></a>

```csharp
public object PublicKeysInput { get; }
```

- *Type:* object

---

##### `NoteReference`<sup>Required</sup> <a name="NoteReference" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.noteReference"></a>

```csharp
public string NoteReference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.internalValue"></a>

```csharp
public BinaryAuthorizationAttestorAttestationAuthorityNote InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a>

---


### BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList <a name="BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.get"></a>

```csharp
private BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference <a name="BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.putPkixPublicKey">PutPkixPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetAsciiArmoredPgpPublicKey">ResetAsciiArmoredPgpPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetPkixPublicKey">ResetPkixPublicKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPkixPublicKey` <a name="PutPkixPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.putPkixPublicKey"></a>

```csharp
private void PutPkixPublicKey(BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.putPkixPublicKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a>

---

##### `ResetAsciiArmoredPgpPublicKey` <a name="ResetAsciiArmoredPgpPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetAsciiArmoredPgpPublicKey"></a>

```csharp
private void ResetAsciiArmoredPgpPublicKey()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPkixPublicKey` <a name="ResetPkixPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetPkixPublicKey"></a>

```csharp
private void ResetPkixPublicKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.pkixPublicKey">PkixPublicKey</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.asciiArmoredPgpPublicKeyInput">AsciiArmoredPgpPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.pkixPublicKeyInput">PkixPublicKeyInput</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.asciiArmoredPgpPublicKey">AsciiArmoredPgpPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PkixPublicKey`<sup>Required</sup> <a name="PkixPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.pkixPublicKey"></a>

```csharp
public BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference PkixPublicKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference</a>

---

##### `AsciiArmoredPgpPublicKeyInput`<sup>Optional</sup> <a name="AsciiArmoredPgpPublicKeyInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.asciiArmoredPgpPublicKeyInput"></a>

```csharp
public string AsciiArmoredPgpPublicKeyInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PkixPublicKeyInput`<sup>Optional</sup> <a name="PkixPublicKeyInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.pkixPublicKeyInput"></a>

```csharp
public BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey PkixPublicKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a>

---

##### `AsciiArmoredPgpPublicKey`<sup>Required</sup> <a name="AsciiArmoredPgpPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.asciiArmoredPgpPublicKey"></a>

```csharp
public string AsciiArmoredPgpPublicKey { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference <a name="BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resetPublicKeyPem">ResetPublicKeyPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resetSignatureAlgorithm">ResetSignatureAlgorithm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPublicKeyPem` <a name="ResetPublicKeyPem" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resetPublicKeyPem"></a>

```csharp
private void ResetPublicKeyPem()
```

##### `ResetSignatureAlgorithm` <a name="ResetSignatureAlgorithm" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resetSignatureAlgorithm"></a>

```csharp
private void ResetSignatureAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.publicKeyPemInput">PublicKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.publicKeyPem">PublicKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicKeyPemInput`<sup>Optional</sup> <a name="PublicKeyPemInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.publicKeyPemInput"></a>

```csharp
public string PublicKeyPemInput { get; }
```

- *Type:* string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.signatureAlgorithmInput"></a>

```csharp
public string SignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `PublicKeyPem`<sup>Required</sup> <a name="PublicKeyPem" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.publicKeyPem"></a>

```csharp
public string PublicKeyPem { get; }
```

- *Type:* string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.internalValue"></a>

```csharp
public BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a>

---


### BinaryAuthorizationAttestorTimeoutsOutputReference <a name="BinaryAuthorizationAttestorTimeoutsOutputReference" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationAttestorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



