# `networkSecurityClientTlsPolicy` Submodule <a name="`networkSecurityClientTlsPolicy` Submodule" id="@cdktf/provider-google.networkSecurityClientTlsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityClientTlsPolicy <a name="NetworkSecurityClientTlsPolicy" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy google_network_security_client_tls_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

networksecurityclienttlspolicy.NewNetworkSecurityClientTlsPolicy(scope Construct, id *string, config NetworkSecurityClientTlsPolicyConfig) NetworkSecurityClientTlsPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig">NetworkSecurityClientTlsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig">NetworkSecurityClientTlsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.putClientCertificate">PutClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.putServerValidationCa">PutServerValidationCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetServerValidationCa">ResetServerValidationCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetSni">ResetSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClientCertificate` <a name="PutClientCertificate" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.putClientCertificate"></a>

```go
func PutClientCertificate(value NetworkSecurityClientTlsPolicyClientCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.putClientCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate">NetworkSecurityClientTlsPolicyClientCertificate</a>

---

##### `PutServerValidationCa` <a name="PutServerValidationCa" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.putServerValidationCa"></a>

```go
func PutServerValidationCa(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.putServerValidationCa.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecurityClientTlsPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeouts">NetworkSecurityClientTlsPolicyTimeouts</a>

---

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServerValidationCa` <a name="ResetServerValidationCa" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetServerValidationCa"></a>

```go
func ResetServerValidationCa()
```

##### `ResetSni` <a name="ResetSni" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetSni"></a>

```go
func ResetSni()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityClientTlsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

networksecurityclienttlspolicy.NetworkSecurityClientTlsPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

networksecurityclienttlspolicy.NetworkSecurityClientTlsPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

networksecurityclienttlspolicy.NetworkSecurityClientTlsPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

networksecurityclienttlspolicy.NetworkSecurityClientTlsPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkSecurityClientTlsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecurityClientTlsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecurityClientTlsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityClientTlsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.clientCertificate">ClientCertificate</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference">NetworkSecurityClientTlsPolicyClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.serverValidationCa">ServerValidationCa</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList">NetworkSecurityClientTlsPolicyServerValidationCaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference">NetworkSecurityClientTlsPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.clientCertificateInput">ClientCertificateInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate">NetworkSecurityClientTlsPolicyClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.serverValidationCaInput">ServerValidationCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.sniInput">SniInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.sni">Sni</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.clientCertificate"></a>

```go
func ClientCertificate() NetworkSecurityClientTlsPolicyClientCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference">NetworkSecurityClientTlsPolicyClientCertificateOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ServerValidationCa`<sup>Required</sup> <a name="ServerValidationCa" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.serverValidationCa"></a>

```go
func ServerValidationCa() NetworkSecurityClientTlsPolicyServerValidationCaList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList">NetworkSecurityClientTlsPolicyServerValidationCaList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.timeouts"></a>

```go
func Timeouts() NetworkSecurityClientTlsPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference">NetworkSecurityClientTlsPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() NetworkSecurityClientTlsPolicyClientCertificate
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate">NetworkSecurityClientTlsPolicyClientCertificate</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServerValidationCaInput`<sup>Optional</sup> <a name="ServerValidationCaInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.serverValidationCaInput"></a>

```go
func ServerValidationCaInput() interface{}
```

- *Type:* interface{}

---

##### `SniInput`<sup>Optional</sup> <a name="SniInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.sniInput"></a>

```go
func SniInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Sni`<sup>Required</sup> <a name="Sni" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.sni"></a>

```go
func Sni() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityClientTlsPolicyClientCertificate <a name="NetworkSecurityClientTlsPolicyClientCertificate" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

&networksecurityclienttlspolicy.NetworkSecurityClientTlsPolicyClientCertificate {
	CertificateProviderInstance: github.com/cdktf/cdktf-provider-google-go/google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance,
	GrpcEndpoint: github.com/cdktf/cdktf-provider-google-go/google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `CertificateProviderInstance`<sup>Optional</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate.property.certificateProviderInstance"></a>

```go
CertificateProviderInstance NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#certificate_provider_instance NetworkSecurityClientTlsPolicy#certificate_provider_instance}

---

##### `GrpcEndpoint`<sup>Optional</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate.property.grpcEndpoint"></a>

```go
GrpcEndpoint NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#grpc_endpoint NetworkSecurityClientTlsPolicy#grpc_endpoint}

---

### NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance <a name="NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

&networksecurityclienttlspolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance {
	PluginInstance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance.property.pluginInstance"></a>

```go
PluginInstance *string
```

- *Type:* *string

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#plugin_instance NetworkSecurityClientTlsPolicy#plugin_instance}

---

### NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint <a name="NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

&networksecurityclienttlspolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint {
	TargetUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint.property.targetUri">TargetUri</a></code> | <code>*string</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint.property.targetUri"></a>

```go
TargetUri *string
```

- *Type:* *string

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#target_uri NetworkSecurityClientTlsPolicy#target_uri}

---

### NetworkSecurityClientTlsPolicyConfig <a name="NetworkSecurityClientTlsPolicyConfig" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

&networksecurityclienttlspolicy.NetworkSecurityClientTlsPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ClientCertificate: github.com/cdktf/cdktf-provider-google-go/google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	ServerValidationCa: interface{},
	Sni: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.clientCertificate">ClientCertificate</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate">NetworkSecurityClientTlsPolicyClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#id NetworkSecurityClientTlsPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The location of the client tls policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#project NetworkSecurityClientTlsPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.serverValidationCa">ServerValidationCa</a></code> | <code>interface{}</code> | server_validation_ca block. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.sni">Sni</a></code> | <code>*string</code> | Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com". |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeouts">NetworkSecurityClientTlsPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the ClientTlsPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#name NetworkSecurityClientTlsPolicy#name}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.clientCertificate"></a>

```go
ClientCertificate NetworkSecurityClientTlsPolicyClientCertificate
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate">NetworkSecurityClientTlsPolicyClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#client_certificate NetworkSecurityClientTlsPolicy#client_certificate}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#description NetworkSecurityClientTlsPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#id NetworkSecurityClientTlsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the ClientTlsPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#labels NetworkSecurityClientTlsPolicy#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the client tls policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#location NetworkSecurityClientTlsPolicy#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#project NetworkSecurityClientTlsPolicy#project}.

---

##### `ServerValidationCa`<sup>Optional</sup> <a name="ServerValidationCa" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.serverValidationCa"></a>

```go
ServerValidationCa interface{}
```

- *Type:* interface{}

server_validation_ca block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#server_validation_ca NetworkSecurityClientTlsPolicy#server_validation_ca}

---

##### `Sni`<sup>Optional</sup> <a name="Sni" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.sni"></a>

```go
Sni *string
```

- *Type:* *string

Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#sni NetworkSecurityClientTlsPolicy#sni}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyConfig.property.timeouts"></a>

```go
Timeouts NetworkSecurityClientTlsPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeouts">NetworkSecurityClientTlsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#timeouts NetworkSecurityClientTlsPolicy#timeouts}

---

### NetworkSecurityClientTlsPolicyServerValidationCa <a name="NetworkSecurityClientTlsPolicyServerValidationCa" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

&networksecurityclienttlspolicy.NetworkSecurityClientTlsPolicyServerValidationCa {
	CertificateProviderInstance: github.com/cdktf/cdktf-provider-google-go/google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance,
	GrpcEndpoint: github.com/cdktf/cdktf-provider-google-go/google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCa.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCa.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `CertificateProviderInstance`<sup>Optional</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCa.property.certificateProviderInstance"></a>

```go
CertificateProviderInstance NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#certificate_provider_instance NetworkSecurityClientTlsPolicy#certificate_provider_instance}

---

##### `GrpcEndpoint`<sup>Optional</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCa.property.grpcEndpoint"></a>

```go
GrpcEndpoint NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#grpc_endpoint NetworkSecurityClientTlsPolicy#grpc_endpoint}

---

### NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance <a name="NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

&networksecurityclienttlspolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance {
	PluginInstance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance.property.pluginInstance"></a>

```go
PluginInstance *string
```

- *Type:* *string

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#plugin_instance NetworkSecurityClientTlsPolicy#plugin_instance}

---

### NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint <a name="NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

&networksecurityclienttlspolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint {
	TargetUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint.property.targetUri">TargetUri</a></code> | <code>*string</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint.property.targetUri"></a>

```go
TargetUri *string
```

- *Type:* *string

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#target_uri NetworkSecurityClientTlsPolicy#target_uri}

---

### NetworkSecurityClientTlsPolicyTimeouts <a name="NetworkSecurityClientTlsPolicyTimeouts" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

&networksecurityclienttlspolicy.NetworkSecurityClientTlsPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#create NetworkSecurityClientTlsPolicy#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#delete NetworkSecurityClientTlsPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#update NetworkSecurityClientTlsPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#create NetworkSecurityClientTlsPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#delete NetworkSecurityClientTlsPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_security_client_tls_policy#update NetworkSecurityClientTlsPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference <a name="NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

networksecurityclienttlspolicy.NewNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput">PluginInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PluginInstanceInput`<sup>Optional</sup> <a name="PluginInstanceInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```go
func PluginInstanceInput() *string
```

- *Type:* *string

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```go
func PluginInstance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

---


### NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference <a name="NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

networksecurityclienttlspolicy.NewNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUriInput">TargetUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUri">TargetUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetUriInput`<sup>Optional</sup> <a name="TargetUriInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUriInput"></a>

```go
func TargetUriInput() *string
```

- *Type:* *string

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUri"></a>

```go
func TargetUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

---


### NetworkSecurityClientTlsPolicyClientCertificateOutputReference <a name="NetworkSecurityClientTlsPolicyClientCertificateOutputReference" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

networksecurityclienttlspolicy.NewNetworkSecurityClientTlsPolicyClientCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityClientTlsPolicyClientCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.putCertificateProviderInstance">PutCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.putGrpcEndpoint">PutGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetCertificateProviderInstance">ResetCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetGrpcEndpoint">ResetGrpcEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateProviderInstance` <a name="PutCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.putCertificateProviderInstance"></a>

```go
func PutCertificateProviderInstance(value NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.putCertificateProviderInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

---

##### `PutGrpcEndpoint` <a name="PutGrpcEndpoint" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.putGrpcEndpoint"></a>

```go
func PutGrpcEndpoint(value NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.putGrpcEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

---

##### `ResetCertificateProviderInstance` <a name="ResetCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetCertificateProviderInstance"></a>

```go
func ResetCertificateProviderInstance()
```

##### `ResetGrpcEndpoint` <a name="ResetGrpcEndpoint" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetGrpcEndpoint"></a>

```go
func ResetGrpcEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference">NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference">NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstanceInput">CertificateProviderInstanceInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpointInput">GrpcEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate">NetworkSecurityClientTlsPolicyClientCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateProviderInstance`<sup>Required</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstance"></a>

```go
func CertificateProviderInstance() NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference">NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference</a>

---

##### `GrpcEndpoint`<sup>Required</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpoint"></a>

```go
func GrpcEndpoint() NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference">NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference</a>

---

##### `CertificateProviderInstanceInput`<sup>Optional</sup> <a name="CertificateProviderInstanceInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstanceInput"></a>

```go
func CertificateProviderInstanceInput() NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

---

##### `GrpcEndpointInput`<sup>Optional</sup> <a name="GrpcEndpointInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpointInput"></a>

```go
func GrpcEndpointInput() NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityClientTlsPolicyClientCertificate
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyClientCertificate">NetworkSecurityClientTlsPolicyClientCertificate</a>

---


### NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference <a name="NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

networksecurityclienttlspolicy.NewNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput">PluginInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PluginInstanceInput`<sup>Optional</sup> <a name="PluginInstanceInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```go
func PluginInstanceInput() *string
```

- *Type:* *string

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```go
func PluginInstance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

---


### NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference <a name="NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

networksecurityclienttlspolicy.NewNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUriInput">TargetUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUri">TargetUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetUriInput`<sup>Optional</sup> <a name="TargetUriInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUriInput"></a>

```go
func TargetUriInput() *string
```

- *Type:* *string

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUri"></a>

```go
func TargetUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

---


### NetworkSecurityClientTlsPolicyServerValidationCaList <a name="NetworkSecurityClientTlsPolicyServerValidationCaList" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

networksecurityclienttlspolicy.NewNetworkSecurityClientTlsPolicyServerValidationCaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityClientTlsPolicyServerValidationCaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.get"></a>

```go
func Get(index *f64) NetworkSecurityClientTlsPolicyServerValidationCaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityClientTlsPolicyServerValidationCaOutputReference <a name="NetworkSecurityClientTlsPolicyServerValidationCaOutputReference" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

networksecurityclienttlspolicy.NewNetworkSecurityClientTlsPolicyServerValidationCaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityClientTlsPolicyServerValidationCaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putCertificateProviderInstance">PutCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putGrpcEndpoint">PutGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetCertificateProviderInstance">ResetCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetGrpcEndpoint">ResetGrpcEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateProviderInstance` <a name="PutCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putCertificateProviderInstance"></a>

```go
func PutCertificateProviderInstance(value NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putCertificateProviderInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

---

##### `PutGrpcEndpoint` <a name="PutGrpcEndpoint" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putGrpcEndpoint"></a>

```go
func PutGrpcEndpoint(value NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putGrpcEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

---

##### `ResetCertificateProviderInstance` <a name="ResetCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetCertificateProviderInstance"></a>

```go
func ResetCertificateProviderInstance()
```

##### `ResetGrpcEndpoint` <a name="ResetGrpcEndpoint" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetGrpcEndpoint"></a>

```go
func ResetGrpcEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference">NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference">NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstanceInput">CertificateProviderInstanceInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpointInput">GrpcEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateProviderInstance`<sup>Required</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstance"></a>

```go
func CertificateProviderInstance() NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference">NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference</a>

---

##### `GrpcEndpoint`<sup>Required</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpoint"></a>

```go
func GrpcEndpoint() NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference">NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference</a>

---

##### `CertificateProviderInstanceInput`<sup>Optional</sup> <a name="CertificateProviderInstanceInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstanceInput"></a>

```go
func CertificateProviderInstanceInput() NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

---

##### `GrpcEndpointInput`<sup>Optional</sup> <a name="GrpcEndpointInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpointInput"></a>

```go
func GrpcEndpointInput() NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityClientTlsPolicyTimeoutsOutputReference <a name="NetworkSecurityClientTlsPolicyTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityclienttlspolicy"

networksecurityclienttlspolicy.NewNetworkSecurityClientTlsPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityClientTlsPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityClientTlsPolicy.NetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



