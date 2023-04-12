# `kmsKeyRingImportJob` Submodule <a name="`kmsKeyRingImportJob` Submodule" id="@cdktf/provider-google.kmsKeyRingImportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKeyRingImportJob <a name="KmsKeyRingImportJob" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job google_kms_key_ring_import_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmskeyringimportjob"

kmskeyringimportjob.NewKmsKeyRingImportJob(scope Construct, id *string, config KmsKeyRingImportJobConfig) KmsKeyRingImportJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig">KmsKeyRingImportJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig">KmsKeyRingImportJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.putTimeouts"></a>

```go
func PutTimeouts(value KmsKeyRingImportJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts">KmsKeyRingImportJobTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmskeyringimportjob"

kmskeyringimportjob.KmsKeyRingImportJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmskeyringimportjob"

kmskeyringimportjob.KmsKeyRingImportJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmskeyringimportjob"

kmskeyringimportjob.KmsKeyRingImportJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.attestation">Attestation</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList">KmsKeyRingImportJobAttestationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.publicKey">PublicKey</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList">KmsKeyRingImportJobPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference">KmsKeyRingImportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importJobIdInput">ImportJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importMethodInput">ImportMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.keyRingInput">KeyRingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.protectionLevelInput">ProtectionLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importJobId">ImportJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importMethod">ImportMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.keyRing">KeyRing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.protectionLevel">ProtectionLevel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attestation`<sup>Required</sup> <a name="Attestation" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.attestation"></a>

```go
func Attestation() KmsKeyRingImportJobAttestationList
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList">KmsKeyRingImportJobAttestationList</a>

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.publicKey"></a>

```go
func PublicKey() KmsKeyRingImportJobPublicKeyList
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList">KmsKeyRingImportJobPublicKeyList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.timeouts"></a>

```go
func Timeouts() KmsKeyRingImportJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference">KmsKeyRingImportJobTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportJobIdInput`<sup>Optional</sup> <a name="ImportJobIdInput" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importJobIdInput"></a>

```go
func ImportJobIdInput() *string
```

- *Type:* *string

---

##### `ImportMethodInput`<sup>Optional</sup> <a name="ImportMethodInput" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importMethodInput"></a>

```go
func ImportMethodInput() *string
```

- *Type:* *string

---

##### `KeyRingInput`<sup>Optional</sup> <a name="KeyRingInput" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.keyRingInput"></a>

```go
func KeyRingInput() *string
```

- *Type:* *string

---

##### `ProtectionLevelInput`<sup>Optional</sup> <a name="ProtectionLevelInput" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.protectionLevelInput"></a>

```go
func ProtectionLevelInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportJobId`<sup>Required</sup> <a name="ImportJobId" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importJobId"></a>

```go
func ImportJobId() *string
```

- *Type:* *string

---

##### `ImportMethod`<sup>Required</sup> <a name="ImportMethod" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importMethod"></a>

```go
func ImportMethod() *string
```

- *Type:* *string

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.keyRing"></a>

```go
func KeyRing() *string
```

- *Type:* *string

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.protectionLevel"></a>

```go
func ProtectionLevel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyRingImportJobAttestation <a name="KmsKeyRingImportJobAttestation" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmskeyringimportjob"

&kmskeyringimportjob.KmsKeyRingImportJobAttestation {

}
```


### KmsKeyRingImportJobConfig <a name="KmsKeyRingImportJobConfig" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmskeyringimportjob"

&kmskeyringimportjob.KmsKeyRingImportJobConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ImportJobId: *string,
	ImportMethod: *string,
	KeyRing: *string,
	ProtectionLevel: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.importJobId">ImportJobId</a></code> | <code>*string</code> | It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.importMethod">ImportMethod</a></code> | <code>*string</code> | The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"]. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.keyRing">KeyRing</a></code> | <code>*string</code> | The KeyRing that this import job belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.protectionLevel">ProtectionLevel</a></code> | <code>*string</code> | The protection level of the ImportJob. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#id KmsKeyRingImportJob#id}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts">KmsKeyRingImportJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ImportJobId`<sup>Required</sup> <a name="ImportJobId" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.importJobId"></a>

```go
ImportJobId *string
```

- *Type:* *string

It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#import_job_id KmsKeyRingImportJob#import_job_id}

---

##### `ImportMethod`<sup>Required</sup> <a name="ImportMethod" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.importMethod"></a>

```go
ImportMethod *string
```

- *Type:* *string

The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#import_method KmsKeyRingImportJob#import_method}

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.keyRing"></a>

```go
KeyRing *string
```

- *Type:* *string

The KeyRing that this import job belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#key_ring KmsKeyRingImportJob#key_ring}

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.protectionLevel"></a>

```go
ProtectionLevel *string
```

- *Type:* *string

The protection level of the ImportJob.

This must match the protectionLevel of the
versionTemplate on the CryptoKey you attempt to import into. Possible values: ["SOFTWARE", "HSM", "EXTERNAL"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#protection_level KmsKeyRingImportJob#protection_level}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#id KmsKeyRingImportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.timeouts"></a>

```go
Timeouts KmsKeyRingImportJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts">KmsKeyRingImportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#timeouts KmsKeyRingImportJob#timeouts}

---

### KmsKeyRingImportJobPublicKey <a name="KmsKeyRingImportJobPublicKey" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmskeyringimportjob"

&kmskeyringimportjob.KmsKeyRingImportJobPublicKey {

}
```


### KmsKeyRingImportJobTimeouts <a name="KmsKeyRingImportJobTimeouts" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmskeyringimportjob"

&kmskeyringimportjob.KmsKeyRingImportJobTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#create KmsKeyRingImportJob#create}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#delete KmsKeyRingImportJob#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#create KmsKeyRingImportJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#delete KmsKeyRingImportJob#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsKeyRingImportJobAttestationList <a name="KmsKeyRingImportJobAttestationList" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmskeyringimportjob"

kmskeyringimportjob.NewKmsKeyRingImportJobAttestationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KmsKeyRingImportJobAttestationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.get"></a>

```go
func Get(index *f64) KmsKeyRingImportJobAttestationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KmsKeyRingImportJobAttestationOutputReference <a name="KmsKeyRingImportJobAttestationOutputReference" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmskeyringimportjob"

kmskeyringimportjob.NewKmsKeyRingImportJobAttestationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KmsKeyRingImportJobAttestationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestation">KmsKeyRingImportJobAttestation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsKeyRingImportJobAttestation
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestation">KmsKeyRingImportJobAttestation</a>

---


### KmsKeyRingImportJobPublicKeyList <a name="KmsKeyRingImportJobPublicKeyList" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmskeyringimportjob"

kmskeyringimportjob.NewKmsKeyRingImportJobPublicKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KmsKeyRingImportJobPublicKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.get"></a>

```go
func Get(index *f64) KmsKeyRingImportJobPublicKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KmsKeyRingImportJobPublicKeyOutputReference <a name="KmsKeyRingImportJobPublicKeyOutputReference" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmskeyringimportjob"

kmskeyringimportjob.NewKmsKeyRingImportJobPublicKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KmsKeyRingImportJobPublicKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.pem">Pem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKey">KmsKeyRingImportJobPublicKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Pem`<sup>Required</sup> <a name="Pem" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.pem"></a>

```go
func Pem() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsKeyRingImportJobPublicKey
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKey">KmsKeyRingImportJobPublicKey</a>

---


### KmsKeyRingImportJobTimeoutsOutputReference <a name="KmsKeyRingImportJobTimeoutsOutputReference" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmskeyringimportjob"

kmskeyringimportjob.NewKmsKeyRingImportJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsKeyRingImportJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



