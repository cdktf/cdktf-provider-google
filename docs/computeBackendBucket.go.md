# `computeBackendBucket` Submodule <a name="`computeBackendBucket` Submodule" id="@cdktf/provider-google.computeBackendBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendBucket <a name="ComputeBackendBucket" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket google_compute_backend_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

computebackendbucket.NewComputeBackendBucket(scope Construct, id *string, config ComputeBackendBucketConfig) ComputeBackendBucket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig">ComputeBackendBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig">ComputeBackendBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy">PutCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCdnPolicy">ResetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCompressionMode">ResetCompressionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCustomResponseHeaders">ResetCustomResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetEdgeSecurityPolicy">ResetEdgeSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetEnableCdn">ResetEnableCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCdnPolicy` <a name="PutCdnPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy"></a>

```go
func PutCdnPolicy(value ComputeBackendBucketCdnPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putTimeouts"></a>

```go
func PutTimeouts(value ComputeBackendBucketTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a>

---

##### `ResetCdnPolicy` <a name="ResetCdnPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCdnPolicy"></a>

```go
func ResetCdnPolicy()
```

##### `ResetCompressionMode` <a name="ResetCompressionMode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCompressionMode"></a>

```go
func ResetCompressionMode()
```

##### `ResetCustomResponseHeaders` <a name="ResetCustomResponseHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCustomResponseHeaders"></a>

```go
func ResetCustomResponseHeaders()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEdgeSecurityPolicy` <a name="ResetEdgeSecurityPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetEdgeSecurityPolicy"></a>

```go
func ResetEdgeSecurityPolicy()
```

##### `ResetEnableCdn` <a name="ResetEnableCdn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetEnableCdn"></a>

```go
func ResetEnableCdn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

computebackendbucket.ComputeBackendBucket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

computebackendbucket.ComputeBackendBucket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

computebackendbucket.ComputeBackendBucket_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference">ComputeBackendBucketCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference">ComputeBackendBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdnPolicyInput">CdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.compressionModeInput">CompressionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.customResponseHeadersInput">CustomResponseHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.edgeSecurityPolicyInput">EdgeSecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.enableCdnInput">EnableCdnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.compressionMode">CompressionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.customResponseHeaders">CustomResponseHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.edgeSecurityPolicy">EdgeSecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.enableCdn">EnableCdn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CdnPolicy`<sup>Required</sup> <a name="CdnPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdnPolicy"></a>

```go
func CdnPolicy() ComputeBackendBucketCdnPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference">ComputeBackendBucketCdnPolicyOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.timeouts"></a>

```go
func Timeouts() ComputeBackendBucketTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference">ComputeBackendBucketTimeoutsOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `CdnPolicyInput`<sup>Optional</sup> <a name="CdnPolicyInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdnPolicyInput"></a>

```go
func CdnPolicyInput() ComputeBackendBucketCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a>

---

##### `CompressionModeInput`<sup>Optional</sup> <a name="CompressionModeInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.compressionModeInput"></a>

```go
func CompressionModeInput() *string
```

- *Type:* *string

---

##### `CustomResponseHeadersInput`<sup>Optional</sup> <a name="CustomResponseHeadersInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.customResponseHeadersInput"></a>

```go
func CustomResponseHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EdgeSecurityPolicyInput`<sup>Optional</sup> <a name="EdgeSecurityPolicyInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.edgeSecurityPolicyInput"></a>

```go
func EdgeSecurityPolicyInput() *string
```

- *Type:* *string

---

##### `EnableCdnInput`<sup>Optional</sup> <a name="EnableCdnInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.enableCdnInput"></a>

```go
func EnableCdnInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CompressionMode`<sup>Required</sup> <a name="CompressionMode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.compressionMode"></a>

```go
func CompressionMode() *string
```

- *Type:* *string

---

##### `CustomResponseHeaders`<sup>Required</sup> <a name="CustomResponseHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.customResponseHeaders"></a>

```go
func CustomResponseHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EdgeSecurityPolicy`<sup>Required</sup> <a name="EdgeSecurityPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.edgeSecurityPolicy"></a>

```go
func EdgeSecurityPolicy() *string
```

- *Type:* *string

---

##### `EnableCdn`<sup>Required</sup> <a name="EnableCdn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.enableCdn"></a>

```go
func EnableCdn() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendBucketCdnPolicy <a name="ComputeBackendBucketCdnPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

&computebackendbucket.ComputeBackendBucketCdnPolicy {
	BypassCacheOnRequestHeaders: interface{},
	CacheKeyPolicy: github.com/cdktf/cdktf-provider-google-go/google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy,
	CacheMode: *string,
	ClientTtl: *f64,
	DefaultTtl: *f64,
	MaxTtl: *f64,
	NegativeCaching: interface{},
	NegativeCachingPolicy: interface{},
	RequestCoalescing: interface{},
	ServeWhileStale: *f64,
	SignedUrlCacheMaxAgeSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.bypassCacheOnRequestHeaders">BypassCacheOnRequestHeaders</a></code> | <code>interface{}</code> | bypass_cache_on_request_headers block. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.cacheMode">CacheMode</a></code> | <code>*string</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.clientTtl">ClientTtl</a></code> | <code>*f64</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.negativeCaching">NegativeCaching</a></code> | <code>interface{}</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code>interface{}</code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.requestCoalescing">RequestCoalescing</a></code> | <code>interface{}</code> | If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.serveWhileStale">ServeWhileStale</a></code> | <code>*f64</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.signedUrlCacheMaxAgeSec">SignedUrlCacheMaxAgeSec</a></code> | <code>*f64</code> | Maximum number of seconds the response to a signed URL request will be considered fresh. |

---

##### `BypassCacheOnRequestHeaders`<sup>Optional</sup> <a name="BypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.bypassCacheOnRequestHeaders"></a>

```go
BypassCacheOnRequestHeaders interface{}
```

- *Type:* interface{}

bypass_cache_on_request_headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#bypass_cache_on_request_headers ComputeBackendBucket#bypass_cache_on_request_headers}

---

##### `CacheKeyPolicy`<sup>Optional</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.cacheKeyPolicy"></a>

```go
CacheKeyPolicy ComputeBackendBucketCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#cache_key_policy ComputeBackendBucket#cache_key_policy}

---

##### `CacheMode`<sup>Optional</sup> <a name="CacheMode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.cacheMode"></a>

```go
CacheMode *string
```

- *Type:* *string

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#cache_mode ComputeBackendBucket#cache_mode}

---

##### `ClientTtl`<sup>Optional</sup> <a name="ClientTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.clientTtl"></a>

```go
ClientTtl *f64
```

- *Type:* *f64

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#client_ttl ComputeBackendBucket#client_ttl}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.defaultTtl"></a>

```go
DefaultTtl *f64
```

- *Type:* *f64

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#default_ttl ComputeBackendBucket#default_ttl}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#max_ttl ComputeBackendBucket#max_ttl}

---

##### `NegativeCaching`<sup>Optional</sup> <a name="NegativeCaching" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.negativeCaching"></a>

```go
NegativeCaching interface{}
```

- *Type:* interface{}

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#negative_caching ComputeBackendBucket#negative_caching}

---

##### `NegativeCachingPolicy`<sup>Optional</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.negativeCachingPolicy"></a>

```go
NegativeCachingPolicy interface{}
```

- *Type:* interface{}

negative_caching_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#negative_caching_policy ComputeBackendBucket#negative_caching_policy}

---

##### `RequestCoalescing`<sup>Optional</sup> <a name="RequestCoalescing" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.requestCoalescing"></a>

```go
RequestCoalescing interface{}
```

- *Type:* interface{}

If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#request_coalescing ComputeBackendBucket#request_coalescing}

---

##### `ServeWhileStale`<sup>Optional</sup> <a name="ServeWhileStale" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.serveWhileStale"></a>

```go
ServeWhileStale *f64
```

- *Type:* *f64

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#serve_while_stale ComputeBackendBucket#serve_while_stale}

---

##### `SignedUrlCacheMaxAgeSec`<sup>Optional</sup> <a name="SignedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

```go
SignedUrlCacheMaxAgeSec *f64
```

- *Type:* *f64

Maximum number of seconds the response to a signed URL request will be considered fresh.

After this time period,
the response will be revalidated before being served.
When serving responses to signed URL requests,
Cloud CDN will internally behave as though
all responses from this backend had a "Cache-Control: public,
max-age=[TTL]" header, regardless of any existing Cache-Control
header. The actual headers served in responses will not be altered.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#signed_url_cache_max_age_sec ComputeBackendBucket#signed_url_cache_max_age_sec}

---

### ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders <a name="ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

&computebackendbucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders {
	HeaderName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.property.headerName">HeaderName</a></code> | <code>*string</code> | The header field name to match on when bypassing cache. Values are case-insensitive. |

---

##### `HeaderName`<sup>Optional</sup> <a name="HeaderName" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

The header field name to match on when bypassing cache. Values are case-insensitive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#header_name ComputeBackendBucket#header_name}

---

### ComputeBackendBucketCdnPolicyCacheKeyPolicy <a name="ComputeBackendBucketCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

&computebackendbucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy {
	IncludeHttpHeaders: *[]*string,
	QueryStringWhitelist: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.property.includeHttpHeaders">IncludeHttpHeaders</a></code> | <code>*[]*string</code> | Allows HTTP request headers (by name) to be used in the cache key. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">QueryStringWhitelist</a></code> | <code>*[]*string</code> | Names of query string parameters to include in cache keys. |

---

##### `IncludeHttpHeaders`<sup>Optional</sup> <a name="IncludeHttpHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.property.includeHttpHeaders"></a>

```go
IncludeHttpHeaders *[]*string
```

- *Type:* *[]*string

Allows HTTP request headers (by name) to be used in the cache key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#include_http_headers ComputeBackendBucket#include_http_headers}

---

##### `QueryStringWhitelist`<sup>Optional</sup> <a name="QueryStringWhitelist" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```go
QueryStringWhitelist *[]*string
```

- *Type:* *[]*string

Names of query string parameters to include in cache keys.

Default parameters are always included. '&' and '=' will
be percent encoded and not treated as delimiters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#query_string_whitelist ComputeBackendBucket#query_string_whitelist}

---

### ComputeBackendBucketCdnPolicyNegativeCachingPolicy <a name="ComputeBackendBucketCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

&computebackendbucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy {
	Code: *f64,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.code">Code</a></code> | <code>*f64</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.ttl">Ttl</a></code> | <code>*f64</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.code"></a>

```go
Code *f64
```

- *Type:* *f64

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#code ComputeBackendBucket#code}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#ttl ComputeBackendBucket#ttl}

---

### ComputeBackendBucketConfig <a name="ComputeBackendBucketConfig" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

&computebackendbucket.ComputeBackendBucketConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BucketName: *string,
	Name: *string,
	CdnPolicy: github.com/cdktf/cdktf-provider-google-go/google.computeBackendBucket.ComputeBackendBucketCdnPolicy,
	CompressionMode: *string,
	CustomResponseHeaders: *[]*string,
	Description: *string,
	EdgeSecurityPolicy: *string,
	EnableCdn: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeBackendBucket.ComputeBackendBucketTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.compressionMode">CompressionMode</a></code> | <code>*string</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.customResponseHeaders">CustomResponseHeaders</a></code> | <code>*[]*string</code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.description">Description</a></code> | <code>*string</code> | An optional textual description of the resource; provided by the client when the resource is created. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.edgeSecurityPolicy">EdgeSecurityPolicy</a></code> | <code>*string</code> | The security policy associated with this backend bucket. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.enableCdn">EnableCdn</a></code> | <code>interface{}</code> | If true, enable Cloud CDN for this BackendBucket. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#id ComputeBackendBucket#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#project ComputeBackendBucket#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#bucket_name ComputeBackendBucket#bucket_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#name ComputeBackendBucket#name}

---

##### `CdnPolicy`<sup>Optional</sup> <a name="CdnPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.cdnPolicy"></a>

```go
CdnPolicy ComputeBackendBucketCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#cdn_policy ComputeBackendBucket#cdn_policy}

---

##### `CompressionMode`<sup>Optional</sup> <a name="CompressionMode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.compressionMode"></a>

```go
CompressionMode *string
```

- *Type:* *string

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#compression_mode ComputeBackendBucket#compression_mode}

---

##### `CustomResponseHeaders`<sup>Optional</sup> <a name="CustomResponseHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.customResponseHeaders"></a>

```go
CustomResponseHeaders *[]*string
```

- *Type:* *[]*string

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#custom_response_headers ComputeBackendBucket#custom_response_headers}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional textual description of the resource; provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#description ComputeBackendBucket#description}

---

##### `EdgeSecurityPolicy`<sup>Optional</sup> <a name="EdgeSecurityPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.edgeSecurityPolicy"></a>

```go
EdgeSecurityPolicy *string
```

- *Type:* *string

The security policy associated with this backend bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#edge_security_policy ComputeBackendBucket#edge_security_policy}

---

##### `EnableCdn`<sup>Optional</sup> <a name="EnableCdn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.enableCdn"></a>

```go
EnableCdn interface{}
```

- *Type:* interface{}

If true, enable Cloud CDN for this BackendBucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#enable_cdn ComputeBackendBucket#enable_cdn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#id ComputeBackendBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#project ComputeBackendBucket#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.timeouts"></a>

```go
Timeouts ComputeBackendBucketTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#timeouts ComputeBackendBucket#timeouts}

---

### ComputeBackendBucketTimeouts <a name="ComputeBackendBucketTimeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

&computebackendbucket.ComputeBackendBucketTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#create ComputeBackendBucket#create}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#delete ComputeBackendBucket#delete}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#update ComputeBackendBucket#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#create ComputeBackendBucket#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#delete ComputeBackendBucket#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#update ComputeBackendBucket#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList <a name="ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

computebackendbucket.NewComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get"></a>

```go
func Get(index *f64) ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference <a name="ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

computebackendbucket.NewComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resetHeaderName">ResetHeaderName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderName` <a name="ResetHeaderName" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resetHeaderName"></a>

```go
func ResetHeaderName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference <a name="ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

computebackendbucket.NewComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders">ResetIncludeHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">ResetQueryStringWhitelist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeHttpHeaders` <a name="ResetIncludeHttpHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders"></a>

```go
func ResetIncludeHttpHeaders()
```

##### `ResetQueryStringWhitelist` <a name="ResetQueryStringWhitelist" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```go
func ResetQueryStringWhitelist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput">IncludeHttpHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">QueryStringWhitelistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders">IncludeHttpHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">QueryStringWhitelist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeHttpHeadersInput`<sup>Optional</sup> <a name="IncludeHttpHeadersInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput"></a>

```go
func IncludeHttpHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringWhitelistInput`<sup>Optional</sup> <a name="QueryStringWhitelistInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```go
func QueryStringWhitelistInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeHttpHeaders`<sup>Required</sup> <a name="IncludeHttpHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders"></a>

```go
func IncludeHttpHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringWhitelist`<sup>Required</sup> <a name="QueryStringWhitelist" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```go
func QueryStringWhitelist() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeBackendBucketCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---


### ComputeBackendBucketCdnPolicyNegativeCachingPolicyList <a name="ComputeBackendBucketCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

computebackendbucket.NewComputeBackendBucketCdnPolicyNegativeCachingPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeBackendBucketCdnPolicyNegativeCachingPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get"></a>

```go
func Get(index *f64) ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference <a name="ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

computebackendbucket.NewComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```go
func ResetCode()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">CodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```go
func CodeInput() *f64
```

- *Type:* *f64

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeBackendBucketCdnPolicyOutputReference <a name="ComputeBackendBucketCdnPolicyOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

computebackendbucket.NewComputeBackendBucketCdnPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeBackendBucketCdnPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders">PutBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy">PutCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy">PutNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders">ResetBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetCacheKeyPolicy">ResetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetCacheMode">ResetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetClientTtl">ResetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetNegativeCaching">ResetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetNegativeCachingPolicy">ResetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetRequestCoalescing">ResetRequestCoalescing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetServeWhileStale">ResetServeWhileStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">ResetSignedUrlCacheMaxAgeSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBypassCacheOnRequestHeaders` <a name="PutBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders"></a>

```go
func PutBypassCacheOnRequestHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCacheKeyPolicy` <a name="PutCacheKeyPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```go
func PutCacheKeyPolicy(value ComputeBackendBucketCdnPolicyCacheKeyPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---

##### `PutNegativeCachingPolicy` <a name="PutNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```go
func PutNegativeCachingPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBypassCacheOnRequestHeaders` <a name="ResetBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders"></a>

```go
func ResetBypassCacheOnRequestHeaders()
```

##### `ResetCacheKeyPolicy` <a name="ResetCacheKeyPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```go
func ResetCacheKeyPolicy()
```

##### `ResetCacheMode` <a name="ResetCacheMode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetCacheMode"></a>

```go
func ResetCacheMode()
```

##### `ResetClientTtl` <a name="ResetClientTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetClientTtl"></a>

```go
func ResetClientTtl()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetDefaultTtl"></a>

```go
func ResetDefaultTtl()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNegativeCaching` <a name="ResetNegativeCaching" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetNegativeCaching"></a>

```go
func ResetNegativeCaching()
```

##### `ResetNegativeCachingPolicy` <a name="ResetNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```go
func ResetNegativeCachingPolicy()
```

##### `ResetRequestCoalescing` <a name="ResetRequestCoalescing" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetRequestCoalescing"></a>

```go
func ResetRequestCoalescing()
```

##### `ResetServeWhileStale` <a name="ResetServeWhileStale" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetServeWhileStale"></a>

```go
func ResetServeWhileStale()
```

##### `ResetSignedUrlCacheMaxAgeSec` <a name="ResetSignedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```go
func ResetSignedUrlCacheMaxAgeSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders">BypassCacheOnRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference">ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList">ComputeBackendBucketCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput">BypassCacheOnRequestHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicyInput">CacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheModeInput">CacheModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.clientTtlInput">ClientTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingInput">NegativeCachingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicyInput">NegativeCachingPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescingInput">RequestCoalescingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStaleInput">ServeWhileStaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">SignedUrlCacheMaxAgeSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheMode">CacheMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.clientTtl">ClientTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCaching">NegativeCaching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescing">RequestCoalescing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStale">ServeWhileStale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">SignedUrlCacheMaxAgeSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BypassCacheOnRequestHeaders`<sup>Required</sup> <a name="BypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders"></a>

```go
func BypassCacheOnRequestHeaders() ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList</a>

---

##### `CacheKeyPolicy`<sup>Required</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```go
func CacheKeyPolicy() ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference">ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `NegativeCachingPolicy`<sup>Required</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```go
func NegativeCachingPolicy() ComputeBackendBucketCdnPolicyNegativeCachingPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList">ComputeBackendBucketCdnPolicyNegativeCachingPolicyList</a>

---

##### `BypassCacheOnRequestHeadersInput`<sup>Optional</sup> <a name="BypassCacheOnRequestHeadersInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput"></a>

```go
func BypassCacheOnRequestHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `CacheKeyPolicyInput`<sup>Optional</sup> <a name="CacheKeyPolicyInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```go
func CacheKeyPolicyInput() ComputeBackendBucketCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---

##### `CacheModeInput`<sup>Optional</sup> <a name="CacheModeInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheModeInput"></a>

```go
func CacheModeInput() *string
```

- *Type:* *string

---

##### `ClientTtlInput`<sup>Optional</sup> <a name="ClientTtlInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.clientTtlInput"></a>

```go
func ClientTtlInput() *f64
```

- *Type:* *f64

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.defaultTtlInput"></a>

```go
func DefaultTtlInput() *f64
```

- *Type:* *f64

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `NegativeCachingInput`<sup>Optional</sup> <a name="NegativeCachingInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingInput"></a>

```go
func NegativeCachingInput() interface{}
```

- *Type:* interface{}

---

##### `NegativeCachingPolicyInput`<sup>Optional</sup> <a name="NegativeCachingPolicyInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```go
func NegativeCachingPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `RequestCoalescingInput`<sup>Optional</sup> <a name="RequestCoalescingInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescingInput"></a>

```go
func RequestCoalescingInput() interface{}
```

- *Type:* interface{}

---

##### `ServeWhileStaleInput`<sup>Optional</sup> <a name="ServeWhileStaleInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```go
func ServeWhileStaleInput() *f64
```

- *Type:* *f64

---

##### `SignedUrlCacheMaxAgeSecInput`<sup>Optional</sup> <a name="SignedUrlCacheMaxAgeSecInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```go
func SignedUrlCacheMaxAgeSecInput() *f64
```

- *Type:* *f64

---

##### `CacheMode`<sup>Required</sup> <a name="CacheMode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheMode"></a>

```go
func CacheMode() *string
```

- *Type:* *string

---

##### `ClientTtl`<sup>Required</sup> <a name="ClientTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.clientTtl"></a>

```go
func ClientTtl() *f64
```

- *Type:* *f64

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.defaultTtl"></a>

```go
func DefaultTtl() *f64
```

- *Type:* *f64

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `NegativeCaching`<sup>Required</sup> <a name="NegativeCaching" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCaching"></a>

```go
func NegativeCaching() interface{}
```

- *Type:* interface{}

---

##### `RequestCoalescing`<sup>Required</sup> <a name="RequestCoalescing" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescing"></a>

```go
func RequestCoalescing() interface{}
```

- *Type:* interface{}

---

##### `ServeWhileStale`<sup>Required</sup> <a name="ServeWhileStale" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStale"></a>

```go
func ServeWhileStale() *f64
```

- *Type:* *f64

---

##### `SignedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="SignedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```go
func SignedUrlCacheMaxAgeSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeBackendBucketCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a>

---


### ComputeBackendBucketTimeoutsOutputReference <a name="ComputeBackendBucketTimeoutsOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendbucket"

computebackendbucket.NewComputeBackendBucketTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeBackendBucketTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



