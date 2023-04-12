# `binaryAuthorizationAttestor` Submodule <a name="`binaryAuthorizationAttestor` Submodule" id="@cdktf/provider-google.binaryAuthorizationAttestor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BinaryAuthorizationAttestor <a name="BinaryAuthorizationAttestor" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor google_binary_authorization_attestor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

binaryauthorizationattestor.NewBinaryAuthorizationAttestor(scope Construct, id *string, config BinaryAuthorizationAttestorConfig) BinaryAuthorizationAttestor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig">BinaryAuthorizationAttestorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAttestationAuthorityNote` <a name="PutAttestationAuthorityNote" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.putAttestationAuthorityNote"></a>

```go
func PutAttestationAuthorityNote(value BinaryAuthorizationAttestorAttestationAuthorityNote)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.putAttestationAuthorityNote.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.putTimeouts"></a>

```go
func PutTimeouts(value BinaryAuthorizationAttestorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts">BinaryAuthorizationAttestorTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

binaryauthorizationattestor.BinaryAuthorizationAttestor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

binaryauthorizationattestor.BinaryAuthorizationAttestor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

binaryauthorizationattestor.BinaryAuthorizationAttestor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.attestationAuthorityNote">AttestationAuthorityNote</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference">BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference">BinaryAuthorizationAttestorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.attestationAuthorityNoteInput">AttestationAuthorityNoteInput</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttestationAuthorityNote`<sup>Required</sup> <a name="AttestationAuthorityNote" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.attestationAuthorityNote"></a>

```go
func AttestationAuthorityNote() BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference">BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.timeouts"></a>

```go
func Timeouts() BinaryAuthorizationAttestorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference">BinaryAuthorizationAttestorTimeoutsOutputReference</a>

---

##### `AttestationAuthorityNoteInput`<sup>Optional</sup> <a name="AttestationAuthorityNoteInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.attestationAuthorityNoteInput"></a>

```go
func AttestationAuthorityNoteInput() BinaryAuthorizationAttestorAttestationAuthorityNote
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BinaryAuthorizationAttestorAttestationAuthorityNote <a name="BinaryAuthorizationAttestorAttestationAuthorityNote" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

&binaryauthorizationattestor.BinaryAuthorizationAttestorAttestationAuthorityNote {
	NoteReference: *string,
	PublicKeys: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote.property.noteReference">NoteReference</a></code> | <code>*string</code> | The resource name of a ATTESTATION_AUTHORITY Note, created by the user. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote.property.publicKeys">PublicKeys</a></code> | <code>interface{}</code> | public_keys block. |

---

##### `NoteReference`<sup>Required</sup> <a name="NoteReference" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote.property.noteReference"></a>

```go
NoteReference *string
```

- *Type:* *string

The resource name of a ATTESTATION_AUTHORITY Note, created by the user.

If the Note is in a different project from the Attestor, it
should be specified in the format 'projects/*/notes/*' (or the legacy
'providers/*/notes/*'). This field may not be updated.
An attestation by this attestor is stored as a Container Analysis
ATTESTATION_AUTHORITY Occurrence that names a container image
and that links to this Note.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#note_reference BinaryAuthorizationAttestor#note_reference}

---

##### `PublicKeys`<sup>Optional</sup> <a name="PublicKeys" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote.property.publicKeys"></a>

```go
PublicKeys interface{}
```

- *Type:* interface{}

public_keys block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#public_keys BinaryAuthorizationAttestor#public_keys}

---

### BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys <a name="BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

&binaryauthorizationattestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys {
	AsciiArmoredPgpPublicKey: *string,
	Comment: *string,
	Id: *string,
	PkixPublicKey: github.com/cdktf/cdktf-provider-google-go/google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.asciiArmoredPgpPublicKey">AsciiArmoredPgpPublicKey</a></code> | <code>*string</code> | ASCII-armored representation of a PGP public key, as the entire output by the command 'gpg --export --armor foo@example.com' (either LF or CRLF line endings). When using this field, id should be left blank. The BinAuthz API handlers will calculate the ID and fill it in automatically. BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If id is provided by the caller, it will be overwritten by the API-calculated ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.comment">Comment</a></code> | <code>*string</code> | A descriptive comment. This field may be updated. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.id">Id</a></code> | <code>*string</code> | The ID of this public key. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.pkixPublicKey">PkixPublicKey</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a></code> | pkix_public_key block. |

---

##### `AsciiArmoredPgpPublicKey`<sup>Optional</sup> <a name="AsciiArmoredPgpPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.asciiArmoredPgpPublicKey"></a>

```go
AsciiArmoredPgpPublicKey *string
```

- *Type:* *string

ASCII-armored representation of a PGP public key, as the entire output by the command 'gpg --export --armor foo@example.com' (either LF or CRLF line endings). When using this field, id should be left blank. The BinAuthz API handlers will calculate the ID and fill it in automatically. BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If id is provided by the caller, it will be overwritten by the API-calculated ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#ascii_armored_pgp_public_key BinaryAuthorizationAttestor#ascii_armored_pgp_public_key}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

A descriptive comment. This field may be updated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#comment BinaryAuthorizationAttestor#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of this public key.

Signatures verified by BinAuthz
must include the ID of the public key that can be used to
verify them, and that ID must match the contents of this
field exactly. Additional restrictions on this field can
be imposed based on which public key type is encapsulated.
See the documentation on publicKey cases below for details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#id BinaryAuthorizationAttestor#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PkixPublicKey`<sup>Optional</sup> <a name="PkixPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.pkixPublicKey"></a>

```go
PkixPublicKey BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a>

pkix_public_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#pkix_public_key BinaryAuthorizationAttestor#pkix_public_key}

---

### BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey <a name="BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

&binaryauthorizationattestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey {
	PublicKeyPem: *string,
	SignatureAlgorithm: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.property.publicKeyPem">PublicKeyPem</a></code> | <code>*string</code> | A PEM-encoded public key, as described in 'https://tools.ietf.org/html/rfc7468#section-13'. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | The signature algorithm used to verify a message against a signature using this key. |

---

##### `PublicKeyPem`<sup>Optional</sup> <a name="PublicKeyPem" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.property.publicKeyPem"></a>

```go
PublicKeyPem *string
```

- *Type:* *string

A PEM-encoded public key, as described in 'https://tools.ietf.org/html/rfc7468#section-13'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#public_key_pem BinaryAuthorizationAttestor#public_key_pem}

---

##### `SignatureAlgorithm`<sup>Optional</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.property.signatureAlgorithm"></a>

```go
SignatureAlgorithm *string
```

- *Type:* *string

The signature algorithm used to verify a message against a signature using this key.

These signature algorithm must
match the structure and any object identifiers encoded in
publicKeyPem (i.e. this algorithm must match that of the
public key).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#signature_algorithm BinaryAuthorizationAttestor#signature_algorithm}

---

### BinaryAuthorizationAttestorConfig <a name="BinaryAuthorizationAttestorConfig" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

&binaryauthorizationattestor.BinaryAuthorizationAttestorConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AttestationAuthorityNote: github.com/cdktf/cdktf-provider-google-go/google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote,
	Name: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.attestationAuthorityNote">AttestationAuthorityNote</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a></code> | attestation_authority_note block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.name">Name</a></code> | <code>*string</code> | The resource name. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.description">Description</a></code> | <code>*string</code> | A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#id BinaryAuthorizationAttestor#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#project BinaryAuthorizationAttestor#project}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts">BinaryAuthorizationAttestorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttestationAuthorityNote`<sup>Required</sup> <a name="AttestationAuthorityNote" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.attestationAuthorityNote"></a>

```go
AttestationAuthorityNote BinaryAuthorizationAttestorAttestationAuthorityNote
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a>

attestation_authority_note block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#attestation_authority_note BinaryAuthorizationAttestor#attestation_authority_note}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#name BinaryAuthorizationAttestor#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#description BinaryAuthorizationAttestor#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#id BinaryAuthorizationAttestor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#project BinaryAuthorizationAttestor#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorConfig.property.timeouts"></a>

```go
Timeouts BinaryAuthorizationAttestorTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts">BinaryAuthorizationAttestorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#timeouts BinaryAuthorizationAttestor#timeouts}

---

### BinaryAuthorizationAttestorTimeouts <a name="BinaryAuthorizationAttestorTimeouts" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

&binaryauthorizationattestor.BinaryAuthorizationAttestorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#create BinaryAuthorizationAttestor#create}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#delete BinaryAuthorizationAttestor#delete}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#update BinaryAuthorizationAttestor#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#create BinaryAuthorizationAttestor#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#delete BinaryAuthorizationAttestor#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#update BinaryAuthorizationAttestor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference <a name="BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

binaryauthorizationattestor.NewBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicKeys` <a name="PutPublicKeys" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.putPublicKeys"></a>

```go
func PutPublicKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.putPublicKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPublicKeys` <a name="ResetPublicKeys" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.resetPublicKeys"></a>

```go
func ResetPublicKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.delegationServiceAccountEmail">DelegationServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.publicKeys">PublicKeys</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.noteReferenceInput">NoteReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.publicKeysInput">PublicKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.noteReference">NoteReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelegationServiceAccountEmail`<sup>Required</sup> <a name="DelegationServiceAccountEmail" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.delegationServiceAccountEmail"></a>

```go
func DelegationServiceAccountEmail() *string
```

- *Type:* *string

---

##### `PublicKeys`<sup>Required</sup> <a name="PublicKeys" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.publicKeys"></a>

```go
func PublicKeys() BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList</a>

---

##### `NoteReferenceInput`<sup>Optional</sup> <a name="NoteReferenceInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.noteReferenceInput"></a>

```go
func NoteReferenceInput() *string
```

- *Type:* *string

---

##### `PublicKeysInput`<sup>Optional</sup> <a name="PublicKeysInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.publicKeysInput"></a>

```go
func PublicKeysInput() interface{}
```

- *Type:* interface{}

---

##### `NoteReference`<sup>Required</sup> <a name="NoteReference" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.noteReference"></a>

```go
func NoteReference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.internalValue"></a>

```go
func InternalValue() BinaryAuthorizationAttestorAttestationAuthorityNote
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNote">BinaryAuthorizationAttestorAttestationAuthorityNote</a>

---


### BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList <a name="BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

binaryauthorizationattestor.NewBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.get"></a>

```go
func Get(index *f64) BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference <a name="BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

binaryauthorizationattestor.NewBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPkixPublicKey` <a name="PutPkixPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.putPkixPublicKey"></a>

```go
func PutPkixPublicKey(value BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.putPkixPublicKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a>

---

##### `ResetAsciiArmoredPgpPublicKey` <a name="ResetAsciiArmoredPgpPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetAsciiArmoredPgpPublicKey"></a>

```go
func ResetAsciiArmoredPgpPublicKey()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPkixPublicKey` <a name="ResetPkixPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetPkixPublicKey"></a>

```go
func ResetPkixPublicKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.pkixPublicKey">PkixPublicKey</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.asciiArmoredPgpPublicKeyInput">AsciiArmoredPgpPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.pkixPublicKeyInput">PkixPublicKeyInput</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.asciiArmoredPgpPublicKey">AsciiArmoredPgpPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PkixPublicKey`<sup>Required</sup> <a name="PkixPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.pkixPublicKey"></a>

```go
func PkixPublicKey() BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference</a>

---

##### `AsciiArmoredPgpPublicKeyInput`<sup>Optional</sup> <a name="AsciiArmoredPgpPublicKeyInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.asciiArmoredPgpPublicKeyInput"></a>

```go
func AsciiArmoredPgpPublicKeyInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PkixPublicKeyInput`<sup>Optional</sup> <a name="PkixPublicKeyInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.pkixPublicKeyInput"></a>

```go
func PkixPublicKeyInput() BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a>

---

##### `AsciiArmoredPgpPublicKey`<sup>Required</sup> <a name="AsciiArmoredPgpPublicKey" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.asciiArmoredPgpPublicKey"></a>

```go
func AsciiArmoredPgpPublicKey() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference <a name="BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

binaryauthorizationattestor.NewBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPublicKeyPem` <a name="ResetPublicKeyPem" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resetPublicKeyPem"></a>

```go
func ResetPublicKeyPem()
```

##### `ResetSignatureAlgorithm` <a name="ResetSignatureAlgorithm" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resetSignatureAlgorithm"></a>

```go
func ResetSignatureAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.publicKeyPemInput">PublicKeyPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.publicKeyPem">PublicKeyPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicKeyPemInput`<sup>Optional</sup> <a name="PublicKeyPemInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.publicKeyPemInput"></a>

```go
func PublicKeyPemInput() *string
```

- *Type:* *string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.signatureAlgorithmInput"></a>

```go
func SignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `PublicKeyPem`<sup>Required</sup> <a name="PublicKeyPem" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.publicKeyPem"></a>

```go
func PublicKeyPem() *string
```

- *Type:* *string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.signatureAlgorithm"></a>

```go
func SignatureAlgorithm() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a>

---


### BinaryAuthorizationAttestorTimeoutsOutputReference <a name="BinaryAuthorizationAttestorTimeoutsOutputReference" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestor"

binaryauthorizationattestor.NewBinaryAuthorizationAttestorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BinaryAuthorizationAttestorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationAttestor.BinaryAuthorizationAttestorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



