# `apigeeEnvgroupAttachment` Submodule <a name="`apigeeEnvgroupAttachment` Submodule" id="@cdktf/provider-google.apigeeEnvgroupAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvgroupAttachment <a name="ApigeeEnvgroupAttachment" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_envgroup_attachment google_apigee_envgroup_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer"></a>

```typescript
import { apigeeEnvgroupAttachment } from '@cdktf/provider-google'

new apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment(scope: Construct, id: string, config: ApigeeEnvgroupAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig">ApigeeEnvgroupAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig">ApigeeEnvgroupAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeEnvgroupAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeEnvgroupAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isConstruct"></a>

```typescript
import { apigeeEnvgroupAttachment } from '@cdktf/provider-google'

apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformElement"></a>

```typescript
import { apigeeEnvgroupAttachment } from '@cdktf/provider-google'

apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformResource"></a>

```typescript
import { apigeeEnvgroupAttachment } from '@cdktf/provider-google'

apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generateConfigForImport"></a>

```typescript
import { apigeeEnvgroupAttachment } from '@cdktf/provider-google'

apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApigeeEnvgroupAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeEnvgroupAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeEnvgroupAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_envgroup_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeEnvgroupAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference">ApigeeEnvgroupAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.envgroupIdInput">envgroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.envgroupId">envgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeEnvgroupAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference">ApigeeEnvgroupAttachmentTimeoutsOutputReference</a>

---

##### `envgroupIdInput`<sup>Optional</sup> <a name="envgroupIdInput" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.envgroupIdInput"></a>

```typescript
public readonly envgroupIdInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeEnvgroupAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a>

---

##### `envgroupId`<sup>Required</sup> <a name="envgroupId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.envgroupId"></a>

```typescript
public readonly envgroupId: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvgroupAttachmentConfig <a name="ApigeeEnvgroupAttachmentConfig" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.Initializer"></a>

```typescript
import { apigeeEnvgroupAttachment } from '@cdktf/provider-google'

const apigeeEnvgroupAttachmentConfig: apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.envgroupId">envgroupId</a></code> | <code>string</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/envgroups/{{envgroup_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.environment">environment</a></code> | <code>string</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_envgroup_attachment#id ApigeeEnvgroupAttachment#id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `envgroupId`<sup>Required</sup> <a name="envgroupId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.envgroupId"></a>

```typescript
public readonly envgroupId: string;
```

- *Type:* string

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/envgroups/{{envgroup_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_envgroup_attachment#envgroup_id ApigeeEnvgroupAttachment#envgroup_id}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The resource ID of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_envgroup_attachment#environment ApigeeEnvgroupAttachment#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_envgroup_attachment#id ApigeeEnvgroupAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeEnvgroupAttachmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_envgroup_attachment#timeouts ApigeeEnvgroupAttachment#timeouts}

---

### ApigeeEnvgroupAttachmentTimeouts <a name="ApigeeEnvgroupAttachmentTimeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.Initializer"></a>

```typescript
import { apigeeEnvgroupAttachment } from '@cdktf/provider-google'

const apigeeEnvgroupAttachmentTimeouts: apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_envgroup_attachment#create ApigeeEnvgroupAttachment#create}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_envgroup_attachment#delete ApigeeEnvgroupAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_envgroup_attachment#create ApigeeEnvgroupAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_envgroup_attachment#delete ApigeeEnvgroupAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvgroupAttachmentTimeoutsOutputReference <a name="ApigeeEnvgroupAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeEnvgroupAttachment } from '@cdktf/provider-google'

new apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeEnvgroupAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a>

---



