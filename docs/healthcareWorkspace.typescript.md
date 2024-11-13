# `healthcareWorkspace` Submodule <a name="`healthcareWorkspace` Submodule" id="@cdktf/provider-google.healthcareWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareWorkspace <a name="HealthcareWorkspace" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace google_healthcare_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.Initializer"></a>

```typescript
import { healthcareWorkspace } from '@cdktf/provider-google'

new healthcareWorkspace.HealthcareWorkspace(scope: Construct, id: string, config: HealthcareWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig">HealthcareWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig">HealthcareWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.putSettings"></a>

```typescript
public putSettings(value: HealthcareWorkspaceSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettings">HealthcareWorkspaceSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.putTimeouts"></a>

```typescript
public putTimeouts(value: HealthcareWorkspaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts">HealthcareWorkspaceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcareWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.isConstruct"></a>

```typescript
import { healthcareWorkspace } from '@cdktf/provider-google'

healthcareWorkspace.HealthcareWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.isTerraformElement"></a>

```typescript
import { healthcareWorkspace } from '@cdktf/provider-google'

healthcareWorkspace.HealthcareWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.isTerraformResource"></a>

```typescript
import { healthcareWorkspace } from '@cdktf/provider-google'

healthcareWorkspace.HealthcareWorkspace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.generateConfigForImport"></a>

```typescript
import { healthcareWorkspace } from '@cdktf/provider-google'

healthcareWorkspace.HealthcareWorkspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HealthcareWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthcareWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthcareWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference">HealthcareWorkspaceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference">HealthcareWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettings">HealthcareWorkspaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts">HealthcareWorkspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.settings"></a>

```typescript
public readonly settings: HealthcareWorkspaceSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference">HealthcareWorkspaceSettingsOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareWorkspaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference">HealthcareWorkspaceTimeoutsOutputReference</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.settingsInput"></a>

```typescript
public readonly settingsInput: HealthcareWorkspaceSettings;
```

- *Type:* <a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettings">HealthcareWorkspaceSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HealthcareWorkspaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts">HealthcareWorkspaceTimeouts</a>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareWorkspaceConfig <a name="HealthcareWorkspaceConfig" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.Initializer"></a>

```typescript
import { healthcareWorkspace } from '@cdktf/provider-google'

const healthcareWorkspaceConfig: healthcareWorkspace.HealthcareWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.dataset">dataset</a></code> | <code>string</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.name">name</a></code> | <code>string</code> | The name of the workspace, in the format 'projects/{projectId}/locations/{location}/datasets/{datasetId}/dataMapperWorkspaces/{workspaceId}'. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettings">HealthcareWorkspaceSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#id HealthcareWorkspace#id}. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The user labels. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts">HealthcareWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#dataset HealthcareWorkspace#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the workspace, in the format 'projects/{projectId}/locations/{location}/datasets/{datasetId}/dataMapperWorkspaces/{workspaceId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#name HealthcareWorkspace#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.settings"></a>

```typescript
public readonly settings: HealthcareWorkspaceSettings;
```

- *Type:* <a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettings">HealthcareWorkspaceSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#settings HealthcareWorkspace#settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#id HealthcareWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The user labels.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#labels HealthcareWorkspace#labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareWorkspaceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts">HealthcareWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#timeouts HealthcareWorkspace#timeouts}

---

### HealthcareWorkspaceSettings <a name="HealthcareWorkspaceSettings" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettings.Initializer"></a>

```typescript
import { healthcareWorkspace } from '@cdktf/provider-google'

const healthcareWorkspaceSettings: healthcareWorkspace.HealthcareWorkspaceSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettings.property.dataProjectIds">dataProjectIds</a></code> | <code>string[]</code> | Project IDs for data projects hosted in a workspace. |

---

##### `dataProjectIds`<sup>Required</sup> <a name="dataProjectIds" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettings.property.dataProjectIds"></a>

```typescript
public readonly dataProjectIds: string[];
```

- *Type:* string[]

Project IDs for data projects hosted in a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#data_project_ids HealthcareWorkspace#data_project_ids}

---

### HealthcareWorkspaceTimeouts <a name="HealthcareWorkspaceTimeouts" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts.Initializer"></a>

```typescript
import { healthcareWorkspace } from '@cdktf/provider-google'

const healthcareWorkspaceTimeouts: healthcareWorkspace.HealthcareWorkspaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#create HealthcareWorkspace#create}. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#delete HealthcareWorkspace#delete}. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#update HealthcareWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#create HealthcareWorkspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#delete HealthcareWorkspace#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/healthcare_workspace#update HealthcareWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareWorkspaceSettingsOutputReference <a name="HealthcareWorkspaceSettingsOutputReference" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.Initializer"></a>

```typescript
import { healthcareWorkspace } from '@cdktf/provider-google'

new healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.property.dataProjectIdsInput">dataProjectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.property.dataProjectIds">dataProjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettings">HealthcareWorkspaceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataProjectIdsInput`<sup>Optional</sup> <a name="dataProjectIdsInput" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.property.dataProjectIdsInput"></a>

```typescript
public readonly dataProjectIdsInput: string[];
```

- *Type:* string[]

---

##### `dataProjectIds`<sup>Required</sup> <a name="dataProjectIds" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.property.dataProjectIds"></a>

```typescript
public readonly dataProjectIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareWorkspaceSettings;
```

- *Type:* <a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceSettings">HealthcareWorkspaceSettings</a>

---


### HealthcareWorkspaceTimeoutsOutputReference <a name="HealthcareWorkspaceTimeoutsOutputReference" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { healthcareWorkspace } from '@cdktf/provider-google'

new healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts">HealthcareWorkspaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareWorkspaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.healthcareWorkspace.HealthcareWorkspaceTimeouts">HealthcareWorkspaceTimeouts</a>

---



