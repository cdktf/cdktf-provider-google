# `computeBackendBucketSignedUrlKey` Submodule <a name="`computeBackendBucketSignedUrlKey` Submodule" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendBucketSignedUrlKey <a name="ComputeBackendBucketSignedUrlKey" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key google_compute_backend_bucket_signed_url_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucketsignedurlkey"

computebackendbucketsignedurlkey.NewComputeBackendBucketSignedUrlKey(scope Construct, id *string, config ComputeBackendBucketSignedUrlKeyConfig) ComputeBackendBucketSignedUrlKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig">ComputeBackendBucketSignedUrlKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig">ComputeBackendBucketSignedUrlKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts"></a>

```go
func PutTimeouts(value ComputeBackendBucketSignedUrlKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucketsignedurlkey"

computebackendbucketsignedurlkey.ComputeBackendBucketSignedUrlKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucketsignedurlkey"

computebackendbucketsignedurlkey.ComputeBackendBucketSignedUrlKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucketsignedurlkey"

computebackendbucketsignedurlkey.ComputeBackendBucketSignedUrlKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference">ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucketInput">BackendBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValueInput">KeyValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucket">BackendBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValue">KeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeouts"></a>

```go
func Timeouts() ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference">ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference</a>

---

##### `BackendBucketInput`<sup>Optional</sup> <a name="BackendBucketInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucketInput"></a>

```go
func BackendBucketInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyValueInput`<sup>Optional</sup> <a name="KeyValueInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValueInput"></a>

```go
func KeyValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackendBucket`<sup>Required</sup> <a name="BackendBucket" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucket"></a>

```go
func BackendBucket() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyValue`<sup>Required</sup> <a name="KeyValue" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValue"></a>

```go
func KeyValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendBucketSignedUrlKeyConfig <a name="ComputeBackendBucketSignedUrlKeyConfig" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucketsignedurlkey"

&computebackendbucketsignedurlkey.ComputeBackendBucketSignedUrlKeyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackendBucket: *string,
	KeyValue: *string,
	Name: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.backendBucket">BackendBucket</a></code> | <code>*string</code> | The backend bucket this signed URL key belongs. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.keyValue">KeyValue</a></code> | <code>*string</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the signed URL key. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendBucket`<sup>Required</sup> <a name="BackendBucket" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.backendBucket"></a>

```go
BackendBucket *string
```

- *Type:* *string

The backend bucket this signed URL key belongs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#backend_bucket ComputeBackendBucketSignedUrlKey#backend_bucket}

---

##### `KeyValue`<sup>Required</sup> <a name="KeyValue" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.keyValue"></a>

```go
KeyValue *string
```

- *Type:* *string

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#key_value ComputeBackendBucketSignedUrlKey#key_value}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the signed URL key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#name ComputeBackendBucketSignedUrlKey#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.timeouts"></a>

```go
Timeouts ComputeBackendBucketSignedUrlKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#timeouts ComputeBackendBucketSignedUrlKey#timeouts}

---

### ComputeBackendBucketSignedUrlKeyTimeouts <a name="ComputeBackendBucketSignedUrlKeyTimeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucketsignedurlkey"

&computebackendbucketsignedurlkey.ComputeBackendBucketSignedUrlKeyTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#create ComputeBackendBucketSignedUrlKey#create}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#delete ComputeBackendBucketSignedUrlKey#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#create ComputeBackendBucketSignedUrlKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#delete ComputeBackendBucketSignedUrlKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference <a name="ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucketsignedurlkey"

computebackendbucketsignedurlkey.NewComputeBackendBucketSignedUrlKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



