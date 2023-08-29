# `data_google_access_approval_folder_service_account`

Refer to the Terraform Registory for docs: [`data_google_access_approval_folder_service_account`](https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/data-sources/access_approval_folder_service_account).

# `dataGoogleAccessApprovalFolderServiceAccount` Submodule <a name="`dataGoogleAccessApprovalFolderServiceAccount` Submodule" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAccessApprovalFolderServiceAccount <a name="DataGoogleAccessApprovalFolderServiceAccount" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/data-sources/access_approval_folder_service_account google_access_approval_folder_service_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.Initializer"></a>

```typescript
import { dataGoogleAccessApprovalFolderServiceAccount } from '@cdktf/provider-google'

new dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount(scope: Construct, id: string, config: DataGoogleAccessApprovalFolderServiceAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig">DataGoogleAccessApprovalFolderServiceAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig">DataGoogleAccessApprovalFolderServiceAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.isConstruct"></a>

```typescript
import { dataGoogleAccessApprovalFolderServiceAccount } from '@cdktf/provider-google'

dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.isTerraformElement"></a>

```typescript
import { dataGoogleAccessApprovalFolderServiceAccount } from '@cdktf/provider-google'

dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.isTerraformDataSource"></a>

```typescript
import { dataGoogleAccessApprovalFolderServiceAccount } from '@cdktf/provider-google'

dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.accountEmail">accountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.folderIdInput">folderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.folderId">folderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accountEmail`<sup>Required</sup> <a name="accountEmail" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.accountEmail"></a>

```typescript
public readonly accountEmail: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `folderIdInput`<sup>Optional</sup> <a name="folderIdInput" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.folderIdInput"></a>

```typescript
public readonly folderIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `folderId`<sup>Required</sup> <a name="folderId" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.folderId"></a>

```typescript
public readonly folderId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAccessApprovalFolderServiceAccountConfig <a name="DataGoogleAccessApprovalFolderServiceAccountConfig" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.Initializer"></a>

```typescript
import { dataGoogleAccessApprovalFolderServiceAccount } from '@cdktf/provider-google'

const dataGoogleAccessApprovalFolderServiceAccountConfig: dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.folderId">folderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/data-sources/access_approval_folder_service_account#folder_id DataGoogleAccessApprovalFolderServiceAccount#folder_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/data-sources/access_approval_folder_service_account#id DataGoogleAccessApprovalFolderServiceAccount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `folderId`<sup>Required</sup> <a name="folderId" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.folderId"></a>

```typescript
public readonly folderId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/data-sources/access_approval_folder_service_account#folder_id DataGoogleAccessApprovalFolderServiceAccount#folder_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAccessApprovalFolderServiceAccount.DataGoogleAccessApprovalFolderServiceAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/data-sources/access_approval_folder_service_account#id DataGoogleAccessApprovalFolderServiceAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



