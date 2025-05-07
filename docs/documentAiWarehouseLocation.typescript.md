# `documentAiWarehouseLocation` Submodule <a name="`documentAiWarehouseLocation` Submodule" id="@cdktf/provider-google.documentAiWarehouseLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentAiWarehouseLocation <a name="DocumentAiWarehouseLocation" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location google_document_ai_warehouse_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.Initializer"></a>

```typescript
import { documentAiWarehouseLocation } from '@cdktf/provider-google'

new documentAiWarehouseLocation.DocumentAiWarehouseLocation(scope: Construct, id: string, config: DocumentAiWarehouseLocationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig">DocumentAiWarehouseLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig">DocumentAiWarehouseLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.resetDocumentCreatorDefaultRole">resetDocumentCreatorDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.putTimeouts"></a>

```typescript
public putTimeouts(value: DocumentAiWarehouseLocationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts">DocumentAiWarehouseLocationTimeouts</a>

---

##### `resetDocumentCreatorDefaultRole` <a name="resetDocumentCreatorDefaultRole" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.resetDocumentCreatorDefaultRole"></a>

```typescript
public resetDocumentCreatorDefaultRole(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DocumentAiWarehouseLocation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.isConstruct"></a>

```typescript
import { documentAiWarehouseLocation } from '@cdktf/provider-google'

documentAiWarehouseLocation.DocumentAiWarehouseLocation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.isTerraformElement"></a>

```typescript
import { documentAiWarehouseLocation } from '@cdktf/provider-google'

documentAiWarehouseLocation.DocumentAiWarehouseLocation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.isTerraformResource"></a>

```typescript
import { documentAiWarehouseLocation } from '@cdktf/provider-google'

documentAiWarehouseLocation.DocumentAiWarehouseLocation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.generateConfigForImport"></a>

```typescript
import { documentAiWarehouseLocation } from '@cdktf/provider-google'

documentAiWarehouseLocation.DocumentAiWarehouseLocation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DocumentAiWarehouseLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DocumentAiWarehouseLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DocumentAiWarehouseLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DocumentAiWarehouseLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference">DocumentAiWarehouseLocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.accessControlModeInput">accessControlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.databaseTypeInput">databaseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.documentCreatorDefaultRoleInput">documentCreatorDefaultRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.projectNumberInput">projectNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts">DocumentAiWarehouseLocationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.accessControlMode">accessControlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.documentCreatorDefaultRole">documentCreatorDefaultRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.projectNumber">projectNumber</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.timeouts"></a>

```typescript
public readonly timeouts: DocumentAiWarehouseLocationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference">DocumentAiWarehouseLocationTimeoutsOutputReference</a>

---

##### `accessControlModeInput`<sup>Optional</sup> <a name="accessControlModeInput" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.accessControlModeInput"></a>

```typescript
public readonly accessControlModeInput: string;
```

- *Type:* string

---

##### `databaseTypeInput`<sup>Optional</sup> <a name="databaseTypeInput" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.databaseTypeInput"></a>

```typescript
public readonly databaseTypeInput: string;
```

- *Type:* string

---

##### `documentCreatorDefaultRoleInput`<sup>Optional</sup> <a name="documentCreatorDefaultRoleInput" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.documentCreatorDefaultRoleInput"></a>

```typescript
public readonly documentCreatorDefaultRoleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectNumberInput`<sup>Optional</sup> <a name="projectNumberInput" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.projectNumberInput"></a>

```typescript
public readonly projectNumberInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DocumentAiWarehouseLocationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts">DocumentAiWarehouseLocationTimeouts</a>

---

##### `accessControlMode`<sup>Required</sup> <a name="accessControlMode" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.accessControlMode"></a>

```typescript
public readonly accessControlMode: string;
```

- *Type:* string

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `documentCreatorDefaultRole`<sup>Required</sup> <a name="documentCreatorDefaultRole" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.documentCreatorDefaultRole"></a>

```typescript
public readonly documentCreatorDefaultRole: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.projectNumber"></a>

```typescript
public readonly projectNumber: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocumentAiWarehouseLocationConfig <a name="DocumentAiWarehouseLocationConfig" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.Initializer"></a>

```typescript
import { documentAiWarehouseLocation } from '@cdktf/provider-google'

const documentAiWarehouseLocationConfig: documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.accessControlMode">accessControlMode</a></code> | <code>string</code> | The access control mode for accessing the customer data. Possible values: ["ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_GCI", "ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_BYOID", "ACL_MODE_UNIVERSAL_ACCESS"]. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.databaseType">databaseType</a></code> | <code>string</code> | The type of database used to store customer data. Possible values: ["DB_INFRA_SPANNER", "DB_CLOUD_SQL_POSTGRES"]. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.location">location</a></code> | <code>string</code> | The location in which the instance is to be provisioned. It takes the form projects/{projectNumber}/locations/{location}. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.projectNumber">projectNumber</a></code> | <code>string</code> | The unique identifier of the project. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.documentCreatorDefaultRole">documentCreatorDefaultRole</a></code> | <code>string</code> | The default role for the person who create a document. Possible values: ["DOCUMENT_ADMIN", "DOCUMENT_EDITOR", "DOCUMENT_VIEWER"]. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#id DocumentAiWarehouseLocation#id}. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The KMS key used for CMEK encryption. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts">DocumentAiWarehouseLocationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessControlMode`<sup>Required</sup> <a name="accessControlMode" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.accessControlMode"></a>

```typescript
public readonly accessControlMode: string;
```

- *Type:* string

The access control mode for accessing the customer data. Possible values: ["ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_GCI", "ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_BYOID", "ACL_MODE_UNIVERSAL_ACCESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#access_control_mode DocumentAiWarehouseLocation#access_control_mode}

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

The type of database used to store customer data. Possible values: ["DB_INFRA_SPANNER", "DB_CLOUD_SQL_POSTGRES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#database_type DocumentAiWarehouseLocation#database_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location in which the instance is to be provisioned. It takes the form projects/{projectNumber}/locations/{location}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#location DocumentAiWarehouseLocation#location}

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.projectNumber"></a>

```typescript
public readonly projectNumber: string;
```

- *Type:* string

The unique identifier of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#project_number DocumentAiWarehouseLocation#project_number}

---

##### `documentCreatorDefaultRole`<sup>Optional</sup> <a name="documentCreatorDefaultRole" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.documentCreatorDefaultRole"></a>

```typescript
public readonly documentCreatorDefaultRole: string;
```

- *Type:* string

The default role for the person who create a document. Possible values: ["DOCUMENT_ADMIN", "DOCUMENT_EDITOR", "DOCUMENT_VIEWER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#document_creator_default_role DocumentAiWarehouseLocation#document_creator_default_role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#id DocumentAiWarehouseLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The KMS key used for CMEK encryption.

It is required that
the kms key is in the same region as the endpoint. The
same key will be used for all provisioned resources, if
encryption is available. If the kmsKey is left empty, no
encryption will be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#kms_key DocumentAiWarehouseLocation#kms_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DocumentAiWarehouseLocationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts">DocumentAiWarehouseLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#timeouts DocumentAiWarehouseLocation#timeouts}

---

### DocumentAiWarehouseLocationTimeouts <a name="DocumentAiWarehouseLocationTimeouts" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts.Initializer"></a>

```typescript
import { documentAiWarehouseLocation } from '@cdktf/provider-google'

const documentAiWarehouseLocationTimeouts: documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#create DocumentAiWarehouseLocation#create}. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#delete DocumentAiWarehouseLocation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#create DocumentAiWarehouseLocation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/document_ai_warehouse_location#delete DocumentAiWarehouseLocation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocumentAiWarehouseLocationTimeoutsOutputReference <a name="DocumentAiWarehouseLocationTimeoutsOutputReference" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseLocation } from '@cdktf/provider-google'

new documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts">DocumentAiWarehouseLocationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocumentAiWarehouseLocationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseLocation.DocumentAiWarehouseLocationTimeouts">DocumentAiWarehouseLocationTimeouts</a>

---



