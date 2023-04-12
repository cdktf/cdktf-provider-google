# `storageBucketObject` Submodule <a name="`storageBucketObject` Submodule" id="@cdktf/provider-google.storageBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucketObject <a name="StorageBucketObject" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object google_storage_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucketobject"

storagebucketobject.NewStorageBucketObject(scope Construct, id *string, config StorageBucketObjectConfig) StorageBucketObject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig">StorageBucketObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig">StorageBucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.putCustomerEncryption">PutCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCustomerEncryption">ResetCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetDetectMd5Hash">ResetDetectMd5Hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetEventBasedHold">ResetEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTemporaryHold">ResetTemporaryHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCustomerEncryption` <a name="PutCustomerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putCustomerEncryption"></a>

```go
func PutCustomerEncryption(value StorageBucketObjectCustomerEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putCustomerEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts"></a>

```go
func PutTimeouts(value StorageBucketObjectTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>

---

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCacheControl"></a>

```go
func ResetCacheControl()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContent"></a>

```go
func ResetContent()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentDisposition"></a>

```go
func ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentEncoding"></a>

```go
func ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentLanguage"></a>

```go
func ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetCustomerEncryption` <a name="ResetCustomerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCustomerEncryption"></a>

```go
func ResetCustomerEncryption()
```

##### `ResetDetectMd5Hash` <a name="ResetDetectMd5Hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetDetectMd5Hash"></a>

```go
func ResetDetectMd5Hash()
```

##### `ResetEventBasedHold` <a name="ResetEventBasedHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetEventBasedHold"></a>

```go
func ResetEventBasedHold()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetSource"></a>

```go
func ResetSource()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetStorageClass"></a>

```go
func ResetStorageClass()
```

##### `ResetTemporaryHold` <a name="ResetTemporaryHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTemporaryHold"></a>

```go
func ResetTemporaryHold()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucketobject"

storagebucketobject.StorageBucketObject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucketobject"

storagebucketobject.StorageBucketObject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucketobject"

storagebucketobject.StorageBucketObject_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.crc32C">Crc32C</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryption">CustomerEncryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference">StorageBucketObjectCustomerEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.md5Hash">Md5Hash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.mediaLink">MediaLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.outputName">OutputName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference">StorageBucketObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControlInput">CacheControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryptionInput">CustomerEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5HashInput">DetectMd5HashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHoldInput">EventBasedHoldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHoldInput">TemporaryHoldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControl">CacheControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5Hash">DetectMd5Hash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHold">EventBasedHold</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHold">TemporaryHold</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Crc32C`<sup>Required</sup> <a name="Crc32C" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.crc32C"></a>

```go
func Crc32C() *string
```

- *Type:* *string

---

##### `CustomerEncryption`<sup>Required</sup> <a name="CustomerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryption"></a>

```go
func CustomerEncryption() StorageBucketObjectCustomerEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference">StorageBucketObjectCustomerEncryptionOutputReference</a>

---

##### `Md5Hash`<sup>Required</sup> <a name="Md5Hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.md5Hash"></a>

```go
func Md5Hash() *string
```

- *Type:* *string

---

##### `MediaLink`<sup>Required</sup> <a name="MediaLink" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.mediaLink"></a>

```go
func MediaLink() *string
```

- *Type:* *string

---

##### `OutputName`<sup>Required</sup> <a name="OutputName" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.outputName"></a>

```go
func OutputName() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeouts"></a>

```go
func Timeouts() StorageBucketObjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference">StorageBucketObjectTimeoutsOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControlInput"></a>

```go
func CacheControlInput() *string
```

- *Type:* *string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDispositionInput"></a>

```go
func ContentDispositionInput() *string
```

- *Type:* *string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncodingInput"></a>

```go
func ContentEncodingInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguageInput"></a>

```go
func ContentLanguageInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `CustomerEncryptionInput`<sup>Optional</sup> <a name="CustomerEncryptionInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryptionInput"></a>

```go
func CustomerEncryptionInput() StorageBucketObjectCustomerEncryption
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

---

##### `DetectMd5HashInput`<sup>Optional</sup> <a name="DetectMd5HashInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5HashInput"></a>

```go
func DetectMd5HashInput() *string
```

- *Type:* *string

---

##### `EventBasedHoldInput`<sup>Optional</sup> <a name="EventBasedHoldInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHoldInput"></a>

```go
func EventBasedHoldInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `TemporaryHoldInput`<sup>Optional</sup> <a name="TemporaryHoldInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHoldInput"></a>

```go
func TemporaryHoldInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControl"></a>

```go
func CacheControl() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDisposition"></a>

```go
func ContentDisposition() *string
```

- *Type:* *string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncoding"></a>

```go
func ContentEncoding() *string
```

- *Type:* *string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguage"></a>

```go
func ContentLanguage() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `DetectMd5Hash`<sup>Required</sup> <a name="DetectMd5Hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5Hash"></a>

```go
func DetectMd5Hash() *string
```

- *Type:* *string

---

##### `EventBasedHold`<sup>Required</sup> <a name="EventBasedHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHold"></a>

```go
func EventBasedHold() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `TemporaryHold`<sup>Required</sup> <a name="TemporaryHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHold"></a>

```go
func TemporaryHold() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketObjectConfig <a name="StorageBucketObjectConfig" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucketobject"

&storagebucketobject.StorageBucketObjectConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Name: *string,
	CacheControl: *string,
	Content: *string,
	ContentDisposition: *string,
	ContentEncoding: *string,
	ContentLanguage: *string,
	ContentType: *string,
	CustomerEncryption: github.com/cdktf/cdktf-provider-google-go/google.storageBucketObject.StorageBucketObjectCustomerEncryption,
	DetectMd5Hash: *string,
	EventBasedHold: interface{},
	Id: *string,
	KmsKeyName: *string,
	Metadata: *map[string]*string,
	Source: *string,
	StorageClass: *string,
	TemporaryHold: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.storageBucketObject.StorageBucketObjectTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.name">Name</a></code> | <code>*string</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.cacheControl">CacheControl</a></code> | <code>*string</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.content">Content</a></code> | <code>*string</code> | Data as string to be uploaded. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | Content-Encoding of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentType">ContentType</a></code> | <code>*string</code> | Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8". |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.customerEncryption">CustomerEncryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | customer_encryption block. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.detectMd5Hash">DetectMd5Hash</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#detect_md5hash StorageBucketObject#detect_md5hash}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.eventBasedHold">EventBasedHold</a></code> | <code>interface{}</code> | Whether an object is under event-based hold. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#id StorageBucketObject#id}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Resource name of the Cloud KMS key that will be used to encrypt the object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.source">Source</a></code> | <code>*string</code> | A path to the data you want to upload. Must be defined if content is not. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.storageClass">StorageClass</a></code> | <code>*string</code> | The StorageClass of the new bucket object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.temporaryHold">TemporaryHold</a></code> | <code>interface{}</code> | Whether an object is under temporary hold. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the containing bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#bucket StorageBucketObject#bucket}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#name StorageBucketObject#name}

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.cacheControl"></a>

```go
CacheControl *string
```

- *Type:* *string

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#cache_control StorageBucketObject#cache_control}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Data as string to be uploaded.

Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#content StorageBucketObject#content}

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentDisposition"></a>

```go
ContentDisposition *string
```

- *Type:* *string

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#content_disposition StorageBucketObject#content_disposition}

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentEncoding"></a>

```go
ContentEncoding *string
```

- *Type:* *string

Content-Encoding of the object data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#content_encoding StorageBucketObject#content_encoding}

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentLanguage"></a>

```go
ContentLanguage *string
```

- *Type:* *string

Content-Language of the object data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#content_language StorageBucketObject#content_language}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#content_type StorageBucketObject#content_type}

---

##### `CustomerEncryption`<sup>Optional</sup> <a name="CustomerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.customerEncryption"></a>

```go
CustomerEncryption StorageBucketObjectCustomerEncryption
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

customer_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#customer_encryption StorageBucketObject#customer_encryption}

---

##### `DetectMd5Hash`<sup>Optional</sup> <a name="DetectMd5Hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.detectMd5Hash"></a>

```go
DetectMd5Hash *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#detect_md5hash StorageBucketObject#detect_md5hash}.

---

##### `EventBasedHold`<sup>Optional</sup> <a name="EventBasedHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.eventBasedHold"></a>

```go
EventBasedHold interface{}
```

- *Type:* interface{}

Whether an object is under event-based hold.

Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#event_based_hold StorageBucketObject#event_based_hold}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#id StorageBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Resource name of the Cloud KMS key that will be used to encrypt the object.

Overrides the object metadata's kmsKeyName value, if any.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#kms_key_name StorageBucketObject#kms_key_name}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#metadata StorageBucketObject#metadata}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

A path to the data you want to upload. Must be defined if content is not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#source StorageBucketObject#source}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

The StorageClass of the new bucket object.

Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#storage_class StorageBucketObject#storage_class}

---

##### `TemporaryHold`<sup>Optional</sup> <a name="TemporaryHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.temporaryHold"></a>

```go
TemporaryHold interface{}
```

- *Type:* interface{}

Whether an object is under temporary hold.

While this flag is set to true, the object is protected against deletion and overwrites.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#temporary_hold StorageBucketObject#temporary_hold}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.timeouts"></a>

```go
Timeouts StorageBucketObjectTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#timeouts StorageBucketObject#timeouts}

---

### StorageBucketObjectCustomerEncryption <a name="StorageBucketObjectCustomerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucketobject"

&storagebucketobject.StorageBucketObjectCustomerEncryption {
	EncryptionKey: *string,
	EncryptionAlgorithm: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | Base64 encoded customer supplied encryption key. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*string</code> | The encryption algorithm. Default: AES256. |

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionKey"></a>

```go
EncryptionKey *string
```

- *Type:* *string

Base64 encoded customer supplied encryption key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#encryption_key StorageBucketObject#encryption_key}

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionAlgorithm"></a>

```go
EncryptionAlgorithm *string
```

- *Type:* *string

The encryption algorithm. Default: AES256.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#encryption_algorithm StorageBucketObject#encryption_algorithm}

---

### StorageBucketObjectTimeouts <a name="StorageBucketObjectTimeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucketobject"

&storagebucketobject.StorageBucketObjectTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#create StorageBucketObject#create}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#delete StorageBucketObject#delete}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#update StorageBucketObject#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#create StorageBucketObject#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#delete StorageBucketObject#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_object#update StorageBucketObject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBucketObjectCustomerEncryptionOutputReference <a name="StorageBucketObjectCustomerEncryptionOutputReference" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucketobject"

storagebucketobject.NewStorageBucketObjectCustomerEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBucketObjectCustomerEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```go
func ResetEncryptionAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```go
func EncryptionAlgorithmInput() *string
```

- *Type:* *string

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() *string
```

- *Type:* *string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm"></a>

```go
func EncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBucketObjectCustomerEncryption
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

---


### StorageBucketObjectTimeoutsOutputReference <a name="StorageBucketObjectTimeoutsOutputReference" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagebucketobject"

storagebucketobject.NewStorageBucketObjectTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBucketObjectTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



