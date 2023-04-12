# `dataGoogleStorageBucketObject` Submodule <a name="`dataGoogleStorageBucketObject` Submodule" id="@cdktf/provider-google.dataGoogleStorageBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageBucketObject <a name="DataGoogleStorageBucketObject" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/storage_bucket_object google_storage_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglestoragebucketobject"

datagooglestoragebucketobject.NewDataGoogleStorageBucketObject(scope Construct, id *string, config DataGoogleStorageBucketObjectConfig) DataGoogleStorageBucketObject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig">DataGoogleStorageBucketObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig">DataGoogleStorageBucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglestoragebucketobject"

datagooglestoragebucketobject.DataGoogleStorageBucketObject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglestoragebucketobject"

datagooglestoragebucketobject.DataGoogleStorageBucketObject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglestoragebucketobject"

datagooglestoragebucketobject.DataGoogleStorageBucketObject_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.cacheControl">CacheControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.crc32C">Crc32C</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.customerEncryption">CustomerEncryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList">DataGoogleStorageBucketObjectCustomerEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.detectMd5Hash">DetectMd5Hash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.eventBasedHold">EventBasedHold</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.md5Hash">Md5Hash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.mediaLink">MediaLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.outputName">OutputName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.temporaryHold">TemporaryHold</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.cacheControl"></a>

```go
func CacheControl() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentDisposition"></a>

```go
func ContentDisposition() *string
```

- *Type:* *string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentEncoding"></a>

```go
func ContentEncoding() *string
```

- *Type:* *string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentLanguage"></a>

```go
func ContentLanguage() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Crc32C`<sup>Required</sup> <a name="Crc32C" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.crc32C"></a>

```go
func Crc32C() *string
```

- *Type:* *string

---

##### `CustomerEncryption`<sup>Required</sup> <a name="CustomerEncryption" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.customerEncryption"></a>

```go
func CustomerEncryption() DataGoogleStorageBucketObjectCustomerEncryptionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList">DataGoogleStorageBucketObjectCustomerEncryptionList</a>

---

##### `DetectMd5Hash`<sup>Required</sup> <a name="DetectMd5Hash" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.detectMd5Hash"></a>

```go
func DetectMd5Hash() *string
```

- *Type:* *string

---

##### `EventBasedHold`<sup>Required</sup> <a name="EventBasedHold" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.eventBasedHold"></a>

```go
func EventBasedHold() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Md5Hash`<sup>Required</sup> <a name="Md5Hash" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.md5Hash"></a>

```go
func Md5Hash() *string
```

- *Type:* *string

---

##### `MediaLink`<sup>Required</sup> <a name="MediaLink" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.mediaLink"></a>

```go
func MediaLink() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `OutputName`<sup>Required</sup> <a name="OutputName" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.outputName"></a>

```go
func OutputName() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `TemporaryHold`<sup>Required</sup> <a name="TemporaryHold" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.temporaryHold"></a>

```go
func TemporaryHold() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageBucketObjectConfig <a name="DataGoogleStorageBucketObjectConfig" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglestoragebucketobject"

&datagooglestoragebucketobject.DataGoogleStorageBucketObjectConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_bucket_object#id DataGoogleStorageBucketObject#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.name">Name</a></code> | <code>*string</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the containing bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_bucket_object#bucket DataGoogleStorageBucketObject#bucket}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_bucket_object#id DataGoogleStorageBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_bucket_object#name DataGoogleStorageBucketObject#name}

---

### DataGoogleStorageBucketObjectCustomerEncryption <a name="DataGoogleStorageBucketObjectCustomerEncryption" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglestoragebucketobject"

&datagooglestoragebucketobject.DataGoogleStorageBucketObjectCustomerEncryption {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageBucketObjectCustomerEncryptionList <a name="DataGoogleStorageBucketObjectCustomerEncryptionList" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglestoragebucketobject"

datagooglestoragebucketobject.NewDataGoogleStorageBucketObjectCustomerEncryptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageBucketObjectCustomerEncryptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.get"></a>

```go
func Get(index *f64) DataGoogleStorageBucketObjectCustomerEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageBucketObjectCustomerEncryptionOutputReference <a name="DataGoogleStorageBucketObjectCustomerEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglestoragebucketobject"

datagooglestoragebucketobject.NewDataGoogleStorageBucketObjectCustomerEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageBucketObjectCustomerEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryption">DataGoogleStorageBucketObjectCustomerEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm"></a>

```go
func EncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageBucketObjectCustomerEncryption
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryption">DataGoogleStorageBucketObjectCustomerEncryption</a>

---



