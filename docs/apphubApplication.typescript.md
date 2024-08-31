# `apphubApplication` Submodule <a name="`apphubApplication` Submodule" id="@cdktf/provider-google.apphubApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApphubApplication <a name="ApphubApplication" id="@cdktf/provider-google.apphubApplication.ApphubApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application google_apphub_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubApplication.ApphubApplication.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

new apphubApplication.ApphubApplication(scope: Construct, id: string, config: ApphubApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig">ApphubApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apphubApplication.ApphubApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubApplication.ApphubApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apphubApplication.ApphubApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig">ApphubApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apphubApplication.ApphubApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apphubApplication.ApphubApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apphubApplication.ApphubApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubApplication.ApphubApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apphubApplication.ApphubApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apphubApplication.ApphubApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apphubApplication.ApphubApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apphubApplication.ApphubApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apphubApplication.ApphubApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apphubApplication.ApphubApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apphubApplication.ApphubApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apphubApplication.ApphubApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apphubApplication.ApphubApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apphubApplication.ApphubApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubApplication.ApphubApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apphubApplication.ApphubApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apphubApplication.ApphubApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubApplication.ApphubApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apphubApplication.ApphubApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apphubApplication.ApphubApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apphubApplication.ApphubApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apphubApplication.ApphubApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubApplication.ApphubApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-google.apphubApplication.ApphubApplication.putAttributes"></a>

```typescript
public putAttributes(value: ApphubApplicationAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubApplication.ApphubApplication.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes">ApphubApplicationAttributes</a>

---

##### `putScope` <a name="putScope" id="@cdktf/provider-google.apphubApplication.ApphubApplication.putScope"></a>

```typescript
public putScope(value: ApphubApplicationScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubApplication.ApphubApplication.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScope">ApphubApplicationScope</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apphubApplication.ApphubApplication.putTimeouts"></a>

```typescript
public putTimeouts(value: ApphubApplicationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubApplication.ApphubApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts">ApphubApplicationTimeouts</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google.apphubApplication.ApphubApplication.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apphubApplication.ApphubApplication.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.apphubApplication.ApphubApplication.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apphubApplication.ApphubApplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.apphubApplication.ApphubApplication.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apphubApplication.ApphubApplication.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApphubApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apphubApplication.ApphubApplication.isConstruct"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

apphubApplication.ApphubApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apphubApplication.ApphubApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apphubApplication.ApphubApplication.isTerraformElement"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

apphubApplication.ApphubApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apphubApplication.ApphubApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apphubApplication.ApphubApplication.isTerraformResource"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

apphubApplication.ApphubApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apphubApplication.ApphubApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apphubApplication.ApphubApplication.generateConfigForImport"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

apphubApplication.ApphubApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApphubApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apphubApplication.ApphubApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apphubApplication.ApphubApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApphubApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apphubApplication.ApphubApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApphubApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apphubApplication.ApphubApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApphubApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference">ApphubApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference">ApphubApplicationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference">ApphubApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.attributesInput">attributesInput</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes">ApphubApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScope">ApphubApplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts">ApphubApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.attributes"></a>

```typescript
public readonly attributes: ApphubApplicationAttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference">ApphubApplicationAttributesOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.scope"></a>

```typescript
public readonly scope: ApphubApplicationScopeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference">ApphubApplicationScopeOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.timeouts"></a>

```typescript
public readonly timeouts: ApphubApplicationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference">ApphubApplicationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.attributesInput"></a>

```typescript
public readonly attributesInput: ApphubApplicationAttributes;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes">ApphubApplicationAttributes</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.scopeInput"></a>

```typescript
public readonly scopeInput: ApphubApplicationScope;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScope">ApphubApplicationScope</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApphubApplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts">ApphubApplicationTimeouts</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apphubApplication.ApphubApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApphubApplicationAttributes <a name="ApphubApplicationAttributes" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

const apphubApplicationAttributes: apphubApplication.ApphubApplicationAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes.property.businessOwners">businessOwners</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners">ApphubApplicationAttributesBusinessOwners</a>[]</code> | business_owners block. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes.property.criticality">criticality</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticality">ApphubApplicationAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes.property.developerOwners">developerOwners</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners">ApphubApplicationAttributesDeveloperOwners</a>[]</code> | developer_owners block. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironment">ApphubApplicationAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes.property.operatorOwners">operatorOwners</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners">ApphubApplicationAttributesOperatorOwners</a>[]</code> | operator_owners block. |

---

##### `businessOwners`<sup>Optional</sup> <a name="businessOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes.property.businessOwners"></a>

```typescript
public readonly businessOwners: IResolvable | ApphubApplicationAttributesBusinessOwners[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners">ApphubApplicationAttributesBusinessOwners</a>[]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#business_owners ApphubApplication#business_owners}

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes.property.criticality"></a>

```typescript
public readonly criticality: ApphubApplicationAttributesCriticality;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticality">ApphubApplicationAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#criticality ApphubApplication#criticality}

---

##### `developerOwners`<sup>Optional</sup> <a name="developerOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes.property.developerOwners"></a>

```typescript
public readonly developerOwners: IResolvable | ApphubApplicationAttributesDeveloperOwners[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners">ApphubApplicationAttributesDeveloperOwners</a>[]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#developer_owners ApphubApplication#developer_owners}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes.property.environment"></a>

```typescript
public readonly environment: ApphubApplicationAttributesEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironment">ApphubApplicationAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#environment ApphubApplication#environment}

---

##### `operatorOwners`<sup>Optional</sup> <a name="operatorOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes.property.operatorOwners"></a>

```typescript
public readonly operatorOwners: IResolvable | ApphubApplicationAttributesOperatorOwners[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners">ApphubApplicationAttributesOperatorOwners</a>[]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#operator_owners ApphubApplication#operator_owners}

---

### ApphubApplicationAttributesBusinessOwners <a name="ApphubApplicationAttributesBusinessOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

const apphubApplicationAttributesBusinessOwners: apphubApplication.ApphubApplicationAttributesBusinessOwners = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners.property.email">email</a></code> | <code>string</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners.property.displayName">displayName</a></code> | <code>string</code> | Optional. Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#email ApphubApplication#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Optional. Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#display_name ApphubApplication#display_name}

---

### ApphubApplicationAttributesCriticality <a name="ApphubApplicationAttributesCriticality" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticality.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

const apphubApplicationAttributesCriticality: apphubApplication.ApphubApplicationAttributesCriticality = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticality.property.type">type</a></code> | <code>string</code> | Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticality.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#type ApphubApplication#type}

---

### ApphubApplicationAttributesDeveloperOwners <a name="ApphubApplicationAttributesDeveloperOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

const apphubApplicationAttributesDeveloperOwners: apphubApplication.ApphubApplicationAttributesDeveloperOwners = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners.property.email">email</a></code> | <code>string</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners.property.displayName">displayName</a></code> | <code>string</code> | Optional. Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#email ApphubApplication#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Optional. Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#display_name ApphubApplication#display_name}

---

### ApphubApplicationAttributesEnvironment <a name="ApphubApplicationAttributesEnvironment" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironment.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

const apphubApplicationAttributesEnvironment: apphubApplication.ApphubApplicationAttributesEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironment.property.type">type</a></code> | <code>string</code> | Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironment.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#type ApphubApplication#type}

---

### ApphubApplicationAttributesOperatorOwners <a name="ApphubApplicationAttributesOperatorOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

const apphubApplicationAttributesOperatorOwners: apphubApplication.ApphubApplicationAttributesOperatorOwners = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners.property.email">email</a></code> | <code>string</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners.property.displayName">displayName</a></code> | <code>string</code> | Optional. Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#email ApphubApplication#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Optional. Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#display_name ApphubApplication#display_name}

---

### ApphubApplicationConfig <a name="ApphubApplicationConfig" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

const apphubApplicationConfig: apphubApplication.ApphubApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Required. The Application identifier. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.location">location</a></code> | <code>string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScope">ApphubApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes">ApphubApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.description">description</a></code> | <code>string</code> | Optional. User-defined description of an Application. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.displayName">displayName</a></code> | <code>string</code> | Optional. User-defined name for the Application. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#id ApphubApplication#id}. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#project ApphubApplication#project}. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts">ApphubApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Required. The Application identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#application_id ApphubApplication#application_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#location ApphubApplication#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.scope"></a>

```typescript
public readonly scope: ApphubApplicationScope;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScope">ApphubApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#scope ApphubApplication#scope}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.attributes"></a>

```typescript
public readonly attributes: ApphubApplicationAttributes;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes">ApphubApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#attributes ApphubApplication#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. User-defined description of an Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#description ApphubApplication#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Optional. User-defined name for the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#display_name ApphubApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#id ApphubApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#project ApphubApplication#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apphubApplication.ApphubApplicationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApphubApplicationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts">ApphubApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#timeouts ApphubApplication#timeouts}

---

### ApphubApplicationScope <a name="ApphubApplicationScope" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScope.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

const apphubApplicationScope: apphubApplication.ApphubApplicationScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScope.property.type">type</a></code> | <code>string</code> | Required. Scope Type.   Possible values: REGIONAL Possible values: ["REGIONAL"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScope.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Required. Scope Type.   Possible values: REGIONAL Possible values: ["REGIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#type ApphubApplication#type}

---

### ApphubApplicationTimeouts <a name="ApphubApplicationTimeouts" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

const apphubApplicationTimeouts: apphubApplication.ApphubApplicationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#create ApphubApplication#create}. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#delete ApphubApplication#delete}. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#update ApphubApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#create ApphubApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#delete ApphubApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/apphub_application#update ApphubApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApphubApplicationAttributesBusinessOwnersList <a name="ApphubApplicationAttributesBusinessOwnersList" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

new apphubApplication.ApphubApplicationAttributesBusinessOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.get"></a>

```typescript
public get(index: number): ApphubApplicationAttributesBusinessOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners">ApphubApplicationAttributesBusinessOwners</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApphubApplicationAttributesBusinessOwners[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners">ApphubApplicationAttributesBusinessOwners</a>[]

---


### ApphubApplicationAttributesBusinessOwnersOutputReference <a name="ApphubApplicationAttributesBusinessOwnersOutputReference" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

new apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners">ApphubApplicationAttributesBusinessOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApphubApplicationAttributesBusinessOwners;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners">ApphubApplicationAttributesBusinessOwners</a>

---


### ApphubApplicationAttributesCriticalityOutputReference <a name="ApphubApplicationAttributesCriticalityOutputReference" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

new apphubApplication.ApphubApplicationAttributesCriticalityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticality">ApphubApplicationAttributesCriticality</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApphubApplicationAttributesCriticality;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticality">ApphubApplicationAttributesCriticality</a>

---


### ApphubApplicationAttributesDeveloperOwnersList <a name="ApphubApplicationAttributesDeveloperOwnersList" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

new apphubApplication.ApphubApplicationAttributesDeveloperOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.get"></a>

```typescript
public get(index: number): ApphubApplicationAttributesDeveloperOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners">ApphubApplicationAttributesDeveloperOwners</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApphubApplicationAttributesDeveloperOwners[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners">ApphubApplicationAttributesDeveloperOwners</a>[]

---


### ApphubApplicationAttributesDeveloperOwnersOutputReference <a name="ApphubApplicationAttributesDeveloperOwnersOutputReference" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

new apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners">ApphubApplicationAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApphubApplicationAttributesDeveloperOwners;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners">ApphubApplicationAttributesDeveloperOwners</a>

---


### ApphubApplicationAttributesEnvironmentOutputReference <a name="ApphubApplicationAttributesEnvironmentOutputReference" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

new apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironment">ApphubApplicationAttributesEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApphubApplicationAttributesEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironment">ApphubApplicationAttributesEnvironment</a>

---


### ApphubApplicationAttributesOperatorOwnersList <a name="ApphubApplicationAttributesOperatorOwnersList" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

new apphubApplication.ApphubApplicationAttributesOperatorOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.get"></a>

```typescript
public get(index: number): ApphubApplicationAttributesOperatorOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners">ApphubApplicationAttributesOperatorOwners</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApphubApplicationAttributesOperatorOwners[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners">ApphubApplicationAttributesOperatorOwners</a>[]

---


### ApphubApplicationAttributesOperatorOwnersOutputReference <a name="ApphubApplicationAttributesOperatorOwnersOutputReference" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

new apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners">ApphubApplicationAttributesOperatorOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApphubApplicationAttributesOperatorOwners;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners">ApphubApplicationAttributesOperatorOwners</a>

---


### ApphubApplicationAttributesOutputReference <a name="ApphubApplicationAttributesOutputReference" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

new apphubApplication.ApphubApplicationAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putBusinessOwners">putBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putCriticality">putCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putDeveloperOwners">putDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putOperatorOwners">putOperatorOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.resetBusinessOwners">resetBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.resetCriticality">resetCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.resetDeveloperOwners">resetDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.resetOperatorOwners">resetOperatorOwners</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBusinessOwners` <a name="putBusinessOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putBusinessOwners"></a>

```typescript
public putBusinessOwners(value: IResolvable | ApphubApplicationAttributesBusinessOwners[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners">ApphubApplicationAttributesBusinessOwners</a>[]

---

##### `putCriticality` <a name="putCriticality" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putCriticality"></a>

```typescript
public putCriticality(value: ApphubApplicationAttributesCriticality): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putCriticality.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticality">ApphubApplicationAttributesCriticality</a>

---

##### `putDeveloperOwners` <a name="putDeveloperOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putDeveloperOwners"></a>

```typescript
public putDeveloperOwners(value: IResolvable | ApphubApplicationAttributesDeveloperOwners[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners">ApphubApplicationAttributesDeveloperOwners</a>[]

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putEnvironment"></a>

```typescript
public putEnvironment(value: ApphubApplicationAttributesEnvironment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironment">ApphubApplicationAttributesEnvironment</a>

---

##### `putOperatorOwners` <a name="putOperatorOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putOperatorOwners"></a>

```typescript
public putOperatorOwners(value: IResolvable | ApphubApplicationAttributesOperatorOwners[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners">ApphubApplicationAttributesOperatorOwners</a>[]

---

##### `resetBusinessOwners` <a name="resetBusinessOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.resetBusinessOwners"></a>

```typescript
public resetBusinessOwners(): void
```

##### `resetCriticality` <a name="resetCriticality" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.resetCriticality"></a>

```typescript
public resetCriticality(): void
```

##### `resetDeveloperOwners` <a name="resetDeveloperOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.resetDeveloperOwners"></a>

```typescript
public resetDeveloperOwners(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetOperatorOwners` <a name="resetOperatorOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.resetOperatorOwners"></a>

```typescript
public resetOperatorOwners(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.businessOwners">businessOwners</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList">ApphubApplicationAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.criticality">criticality</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference">ApphubApplicationAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.developerOwners">developerOwners</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList">ApphubApplicationAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference">ApphubApplicationAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.operatorOwners">operatorOwners</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList">ApphubApplicationAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.businessOwnersInput">businessOwnersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners">ApphubApplicationAttributesBusinessOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.criticalityInput">criticalityInput</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticality">ApphubApplicationAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.developerOwnersInput">developerOwnersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners">ApphubApplicationAttributesDeveloperOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.environmentInput">environmentInput</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironment">ApphubApplicationAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.operatorOwnersInput">operatorOwnersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners">ApphubApplicationAttributesOperatorOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes">ApphubApplicationAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `businessOwners`<sup>Required</sup> <a name="businessOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.businessOwners"></a>

```typescript
public readonly businessOwners: ApphubApplicationAttributesBusinessOwnersList;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwnersList">ApphubApplicationAttributesBusinessOwnersList</a>

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.criticality"></a>

```typescript
public readonly criticality: ApphubApplicationAttributesCriticalityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticalityOutputReference">ApphubApplicationAttributesCriticalityOutputReference</a>

---

##### `developerOwners`<sup>Required</sup> <a name="developerOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.developerOwners"></a>

```typescript
public readonly developerOwners: ApphubApplicationAttributesDeveloperOwnersList;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwnersList">ApphubApplicationAttributesDeveloperOwnersList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.environment"></a>

```typescript
public readonly environment: ApphubApplicationAttributesEnvironmentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironmentOutputReference">ApphubApplicationAttributesEnvironmentOutputReference</a>

---

##### `operatorOwners`<sup>Required</sup> <a name="operatorOwners" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.operatorOwners"></a>

```typescript
public readonly operatorOwners: ApphubApplicationAttributesOperatorOwnersList;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwnersList">ApphubApplicationAttributesOperatorOwnersList</a>

---

##### `businessOwnersInput`<sup>Optional</sup> <a name="businessOwnersInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.businessOwnersInput"></a>

```typescript
public readonly businessOwnersInput: IResolvable | ApphubApplicationAttributesBusinessOwners[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesBusinessOwners">ApphubApplicationAttributesBusinessOwners</a>[]

---

##### `criticalityInput`<sup>Optional</sup> <a name="criticalityInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.criticalityInput"></a>

```typescript
public readonly criticalityInput: ApphubApplicationAttributesCriticality;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesCriticality">ApphubApplicationAttributesCriticality</a>

---

##### `developerOwnersInput`<sup>Optional</sup> <a name="developerOwnersInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.developerOwnersInput"></a>

```typescript
public readonly developerOwnersInput: IResolvable | ApphubApplicationAttributesDeveloperOwners[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesDeveloperOwners">ApphubApplicationAttributesDeveloperOwners</a>[]

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: ApphubApplicationAttributesEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesEnvironment">ApphubApplicationAttributesEnvironment</a>

---

##### `operatorOwnersInput`<sup>Optional</sup> <a name="operatorOwnersInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.operatorOwnersInput"></a>

```typescript
public readonly operatorOwnersInput: IResolvable | ApphubApplicationAttributesOperatorOwners[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOperatorOwners">ApphubApplicationAttributesOperatorOwners</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apphubApplication.ApphubApplicationAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApphubApplicationAttributes;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationAttributes">ApphubApplicationAttributes</a>

---


### ApphubApplicationScopeOutputReference <a name="ApphubApplicationScopeOutputReference" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

new apphubApplication.ApphubApplicationScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScope">ApphubApplicationScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apphubApplication.ApphubApplicationScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApphubApplicationScope;
```

- *Type:* <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationScope">ApphubApplicationScope</a>

---


### ApphubApplicationTimeoutsOutputReference <a name="ApphubApplicationTimeoutsOutputReference" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.Initializer"></a>

```typescript
import { apphubApplication } from '@cdktf/provider-google'

new apphubApplication.ApphubApplicationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts">ApphubApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apphubApplication.ApphubApplicationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApphubApplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apphubApplication.ApphubApplicationTimeouts">ApphubApplicationTimeouts</a>

---



