# `dataGoogleFirestoreDocument` Submodule <a name="`dataGoogleFirestoreDocument` Submodule" id="@cdktf/provider-google.dataGoogleFirestoreDocument"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleFirestoreDocument <a name="DataGoogleFirestoreDocument" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/firestore_document google_firestore_document}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.Initializer"></a>

```typescript
import { dataGoogleFirestoreDocument } from '@cdktf/provider-google'

new dataGoogleFirestoreDocument.DataGoogleFirestoreDocument(scope: Construct, id: string, config: DataGoogleFirestoreDocumentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig">DataGoogleFirestoreDocumentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig">DataGoogleFirestoreDocumentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleFirestoreDocument resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.isConstruct"></a>

```typescript
import { dataGoogleFirestoreDocument } from '@cdktf/provider-google'

dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.isTerraformElement"></a>

```typescript
import { dataGoogleFirestoreDocument } from '@cdktf/provider-google'

dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.isTerraformDataSource"></a>

```typescript
import { dataGoogleFirestoreDocument } from '@cdktf/provider-google'

dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.generateConfigForImport"></a>

```typescript
import { dataGoogleFirestoreDocument } from '@cdktf/provider-google'

dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleFirestoreDocument resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleFirestoreDocument to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleFirestoreDocument that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/firestore_document#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleFirestoreDocument to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.fields">fields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.collectionInput">collectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.documentIdInput">documentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.collection">collection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.documentId">documentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.fields"></a>

```typescript
public readonly fields: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `collectionInput`<sup>Optional</sup> <a name="collectionInput" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.collectionInput"></a>

```typescript
public readonly collectionInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `documentIdInput`<sup>Optional</sup> <a name="documentIdInput" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.documentIdInput"></a>

```typescript
public readonly documentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.collection"></a>

```typescript
public readonly collection: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `documentId`<sup>Required</sup> <a name="documentId" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.documentId"></a>

```typescript
public readonly documentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocument.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleFirestoreDocumentConfig <a name="DataGoogleFirestoreDocumentConfig" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.Initializer"></a>

```typescript
import { dataGoogleFirestoreDocument } from '@cdktf/provider-google'

const dataGoogleFirestoreDocumentConfig: dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.collection">collection</a></code> | <code>string</code> | The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages. |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.database">database</a></code> | <code>string</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.documentId">documentId</a></code> | <code>string</code> | The client-assigned document ID to use for this document during creation. |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/firestore_document#id DataGoogleFirestoreDocument#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/firestore_document#project DataGoogleFirestoreDocument#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.collection"></a>

```typescript
public readonly collection: string;
```

- *Type:* string

The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/firestore_document#collection DataGoogleFirestoreDocument#collection}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/firestore_document#database DataGoogleFirestoreDocument#database}

---

##### `documentId`<sup>Required</sup> <a name="documentId" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.documentId"></a>

```typescript
public readonly documentId: string;
```

- *Type:* string

The client-assigned document ID to use for this document during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/firestore_document#document_id DataGoogleFirestoreDocument#document_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/firestore_document#id DataGoogleFirestoreDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleFirestoreDocument.DataGoogleFirestoreDocumentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/firestore_document#project DataGoogleFirestoreDocument#project}.

---



