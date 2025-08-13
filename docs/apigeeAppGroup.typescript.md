# `apigeeAppGroup` Submodule <a name="`apigeeAppGroup` Submodule" id="@cdktf/provider-google.apigeeAppGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeAppGroup <a name="ApigeeAppGroup" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group google_apigee_app_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer"></a>

```typescript
import { apigeeAppGroup } from '@cdktf/provider-google'

new apigeeAppGroup.ApigeeAppGroup(scope: Construct, id: string, config: ApigeeAppGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig">ApigeeAppGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig">ApigeeAppGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetChannelId">resetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetChannelUri">resetChannelUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.putAttributes"></a>

```typescript
public putAttributes(value: IResolvable | ApigeeAppGroupAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.putAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes">ApigeeAppGroupAttributes</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeAppGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts">ApigeeAppGroupTimeouts</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetChannelId` <a name="resetChannelId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetChannelId"></a>

```typescript
public resetChannelId(): void
```

##### `resetChannelUri` <a name="resetChannelUri" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetChannelUri"></a>

```typescript
public resetChannelUri(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeAppGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isConstruct"></a>

```typescript
import { apigeeAppGroup } from '@cdktf/provider-google'

apigeeAppGroup.ApigeeAppGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isTerraformElement"></a>

```typescript
import { apigeeAppGroup } from '@cdktf/provider-google'

apigeeAppGroup.ApigeeAppGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isTerraformResource"></a>

```typescript
import { apigeeAppGroup } from '@cdktf/provider-google'

apigeeAppGroup.ApigeeAppGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.generateConfigForImport"></a>

```typescript
import { apigeeAppGroup } from '@cdktf/provider-google'

apigeeAppGroup.ApigeeAppGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApigeeAppGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeAppGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeAppGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeAppGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.appGroupId">appGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList">ApigeeAppGroupAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.lastModifiedAt">lastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference">ApigeeAppGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.attributesInput">attributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes">ApigeeAppGroupAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelUriInput">channelUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts">ApigeeAppGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelUri">channelUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appGroupId`<sup>Required</sup> <a name="appGroupId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.appGroupId"></a>

```typescript
public readonly appGroupId: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.attributes"></a>

```typescript
public readonly attributes: ApigeeAppGroupAttributesList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList">ApigeeAppGroupAttributesList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.lastModifiedAt"></a>

```typescript
public readonly lastModifiedAt: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeAppGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference">ApigeeAppGroupTimeoutsOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | ApigeeAppGroupAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes">ApigeeAppGroupAttributes</a>[]

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `channelUriInput`<sup>Optional</sup> <a name="channelUriInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelUriInput"></a>

```typescript
public readonly channelUriInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeAppGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts">ApigeeAppGroupTimeouts</a>

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `channelUri`<sup>Required</sup> <a name="channelUri" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelUri"></a>

```typescript
public readonly channelUri: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeAppGroupAttributes <a name="ApigeeAppGroupAttributes" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes.Initializer"></a>

```typescript
import { apigeeAppGroup } from '@cdktf/provider-google'

const apigeeAppGroupAttributes: apigeeAppGroup.ApigeeAppGroupAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes.property.name">name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes.property.value">value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#name ApigeeAppGroup#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#value ApigeeAppGroup#value}

---

### ApigeeAppGroupConfig <a name="ApigeeAppGroupConfig" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.Initializer"></a>

```typescript
import { apigeeAppGroup } from '@cdktf/provider-google'

const apigeeAppGroupConfig: apigeeAppGroup.ApigeeAppGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.name">name</a></code> | <code>string</code> | Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._-$ %. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.orgId">orgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee app group, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.attributes">attributes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes">ApigeeAppGroupAttributes</a>[]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.channelId">channelId</a></code> | <code>string</code> | Channel identifier identifies the owner maintaining this grouping. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.channelUri">channelUri</a></code> | <code>string</code> | A reference to the associated storefront/marketplace. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.displayName">displayName</a></code> | <code>string</code> | App group name displayed in the UI. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#id ApigeeAppGroup#id}. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.status">status</a></code> | <code>string</code> | Valid values are active or inactive. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts">ApigeeAppGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._-$ %.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#name ApigeeAppGroup#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Apigee Organization associated with the Apigee app group, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#org_id ApigeeAppGroup#org_id}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.attributes"></a>

```typescript
public readonly attributes: IResolvable | ApigeeAppGroupAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes">ApigeeAppGroupAttributes</a>[]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#attributes ApigeeAppGroup#attributes}

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

Channel identifier identifies the owner maintaining this grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#channel_id ApigeeAppGroup#channel_id}

---

##### `channelUri`<sup>Optional</sup> <a name="channelUri" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.channelUri"></a>

```typescript
public readonly channelUri: string;
```

- *Type:* string

A reference to the associated storefront/marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#channel_uri ApigeeAppGroup#channel_uri}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

App group name displayed in the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#display_name ApigeeAppGroup#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#id ApigeeAppGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Valid values are active or inactive.

Note that the status of the AppGroup should be updated via UpdateAppGroupRequest by setting the action as active or inactive. Possible values: ["active", "inactive"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#status ApigeeAppGroup#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeAppGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts">ApigeeAppGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#timeouts ApigeeAppGroup#timeouts}

---

### ApigeeAppGroupTimeouts <a name="ApigeeAppGroupTimeouts" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.Initializer"></a>

```typescript
import { apigeeAppGroup } from '@cdktf/provider-google'

const apigeeAppGroupTimeouts: apigeeAppGroup.ApigeeAppGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#create ApigeeAppGroup#create}. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#delete ApigeeAppGroup#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#update ApigeeAppGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#create ApigeeAppGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#delete ApigeeAppGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_app_group#update ApigeeAppGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeAppGroupAttributesList <a name="ApigeeAppGroupAttributesList" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer"></a>

```typescript
import { apigeeAppGroup } from '@cdktf/provider-google'

new apigeeAppGroup.ApigeeAppGroupAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.get"></a>

```typescript
public get(index: number): ApigeeAppGroupAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes">ApigeeAppGroupAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeAppGroupAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes">ApigeeAppGroupAttributes</a>[]

---


### ApigeeAppGroupAttributesOutputReference <a name="ApigeeAppGroupAttributesOutputReference" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer"></a>

```typescript
import { apigeeAppGroup } from '@cdktf/provider-google'

new apigeeAppGroup.ApigeeAppGroupAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes">ApigeeAppGroupAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeAppGroupAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes">ApigeeAppGroupAttributes</a>

---


### ApigeeAppGroupTimeoutsOutputReference <a name="ApigeeAppGroupTimeoutsOutputReference" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeAppGroup } from '@cdktf/provider-google'

new apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts">ApigeeAppGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeAppGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts">ApigeeAppGroupTimeouts</a>

---



