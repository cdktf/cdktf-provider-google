# `osLoginSshPublicKey` Submodule <a name="`osLoginSshPublicKey` Submodule" id="@cdktf/provider-google.osLoginSshPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsLoginSshPublicKey <a name="OsLoginSshPublicKey" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key google_os_login_ssh_public_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osloginsshpublickey"

osloginsshpublickey.NewOsLoginSshPublicKey(scope Construct, id *string, config OsLoginSshPublicKeyConfig) OsLoginSshPublicKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig">OsLoginSshPublicKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig">OsLoginSshPublicKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetExpirationTimeUsec">ResetExpirationTimeUsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts"></a>

```go
func PutTimeouts(value OsLoginSshPublicKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>

---

##### `ResetExpirationTimeUsec` <a name="ResetExpirationTimeUsec" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetExpirationTimeUsec"></a>

```go
func ResetExpirationTimeUsec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osloginsshpublickey"

osloginsshpublickey.OsLoginSshPublicKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osloginsshpublickey"

osloginsshpublickey.OsLoginSshPublicKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osloginsshpublickey"

osloginsshpublickey.OsLoginSshPublicKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference">OsLoginSshPublicKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsecInput">ExpirationTimeUsecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsec">ExpirationTimeUsec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.user">User</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeouts"></a>

```go
func Timeouts() OsLoginSshPublicKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference">OsLoginSshPublicKeyTimeoutsOutputReference</a>

---

##### `ExpirationTimeUsecInput`<sup>Optional</sup> <a name="ExpirationTimeUsecInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsecInput"></a>

```go
func ExpirationTimeUsecInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `ExpirationTimeUsec`<sup>Required</sup> <a name="ExpirationTimeUsec" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsec"></a>

```go
func ExpirationTimeUsec() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OsLoginSshPublicKeyConfig <a name="OsLoginSshPublicKeyConfig" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osloginsshpublickey"

&osloginsshpublickey.OsLoginSshPublicKeyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Key: *string,
	User: *string,
	ExpirationTimeUsec: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.key">Key</a></code> | <code>*string</code> | Public key text in SSH format, defined by RFC4253 section 6.6. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.user">User</a></code> | <code>*string</code> | The user email. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.expirationTimeUsec">ExpirationTimeUsec</a></code> | <code>*string</code> | An expiration time in microseconds since epoch. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key#id OsLoginSshPublicKey#id}. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.project">Project</a></code> | <code>*string</code> | The project ID of the Google Cloud Platform project. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Public key text in SSH format, defined by RFC4253 section 6.6.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key#key OsLoginSshPublicKey#key}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.user"></a>

```go
User *string
```

- *Type:* *string

The user email.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key#user OsLoginSshPublicKey#user}

---

##### `ExpirationTimeUsec`<sup>Optional</sup> <a name="ExpirationTimeUsec" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.expirationTimeUsec"></a>

```go
ExpirationTimeUsec *string
```

- *Type:* *string

An expiration time in microseconds since epoch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key#expiration_time_usec OsLoginSshPublicKey#expiration_time_usec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key#id OsLoginSshPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project ID of the Google Cloud Platform project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key#project OsLoginSshPublicKey#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.timeouts"></a>

```go
Timeouts OsLoginSshPublicKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key#timeouts OsLoginSshPublicKey#timeouts}

---

### OsLoginSshPublicKeyTimeouts <a name="OsLoginSshPublicKeyTimeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osloginsshpublickey"

&osloginsshpublickey.OsLoginSshPublicKeyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key#create OsLoginSshPublicKey#create}. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key#delete OsLoginSshPublicKey#delete}. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key#update OsLoginSshPublicKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key#create OsLoginSshPublicKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key#delete OsLoginSshPublicKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key#update OsLoginSshPublicKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsLoginSshPublicKeyTimeoutsOutputReference <a name="OsLoginSshPublicKeyTimeoutsOutputReference" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/osloginsshpublickey"

osloginsshpublickey.NewOsLoginSshPublicKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsLoginSshPublicKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



