# `gkeHubScopeRbacRoleBinding` Submodule <a name="`gkeHubScopeRbacRoleBinding` Submodule" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubScopeRbacRoleBinding <a name="GkeHubScopeRbacRoleBinding" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding google_gke_hub_scope_rbac_role_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer"></a>

```typescript
import { gkeHubScopeRbacRoleBinding } from '@cdktf/provider-google'

new gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding(scope: Construct, id: string, config: GkeHubScopeRbacRoleBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig">GkeHubScopeRbacRoleBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig">GkeHubScopeRbacRoleBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putRole">putRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRole` <a name="putRole" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putRole"></a>

```typescript
public putRole(value: GkeHubScopeRbacRoleBindingRole): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: GkeHubScopeRbacRoleBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>

---

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GkeHubScopeRbacRoleBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isConstruct"></a>

```typescript
import { gkeHubScopeRbacRoleBinding } from '@cdktf/provider-google'

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformElement"></a>

```typescript
import { gkeHubScopeRbacRoleBinding } from '@cdktf/provider-google'

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformResource"></a>

```typescript
import { gkeHubScopeRbacRoleBinding } from '@cdktf/provider-google'

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport"></a>

```typescript
import { gkeHubScopeRbacRoleBinding } from '@cdktf/provider-google'

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GkeHubScopeRbacRoleBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeHubScopeRbacRoleBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeHubScopeRbacRoleBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeHubScopeRbacRoleBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.role">role</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference">GkeHubScopeRbacRoleBindingRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.state">state</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList">GkeHubScopeRbacRoleBindingStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference">GkeHubScopeRbacRoleBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.roleInput">roleInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeIdInput">scopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput">scopeRbacRoleBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId">scopeRbacRoleBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.role"></a>

```typescript
public readonly role: GkeHubScopeRbacRoleBindingRoleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference">GkeHubScopeRbacRoleBindingRoleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.state"></a>

```typescript
public readonly state: GkeHubScopeRbacRoleBindingStateList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList">GkeHubScopeRbacRoleBindingStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeouts"></a>

```typescript
public readonly timeouts: GkeHubScopeRbacRoleBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference">GkeHubScopeRbacRoleBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.roleInput"></a>

```typescript
public readonly roleInput: GkeHubScopeRbacRoleBindingRole;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeIdInput"></a>

```typescript
public readonly scopeIdInput: string;
```

- *Type:* string

---

##### `scopeRbacRoleBindingIdInput`<sup>Optional</sup> <a name="scopeRbacRoleBindingIdInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput"></a>

```typescript
public readonly scopeRbacRoleBindingIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GkeHubScopeRbacRoleBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

##### `scopeRbacRoleBindingId`<sup>Required</sup> <a name="scopeRbacRoleBindingId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId"></a>

```typescript
public readonly scopeRbacRoleBindingId: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubScopeRbacRoleBindingConfig <a name="GkeHubScopeRbacRoleBindingConfig" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.Initializer"></a>

```typescript
import { gkeHubScopeRbacRoleBinding } from '@cdktf/provider-google'

const gkeHubScopeRbacRoleBindingConfig: gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.role">role</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeId">scopeId</a></code> | <code>string</code> | Id of the scope. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId">scopeRbacRoleBindingId</a></code> | <code>string</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.group">group</a></code> | <code>string</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#id GkeHubScopeRbacRoleBinding#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels for this ScopeRBACRoleBinding. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#project GkeHubScopeRbacRoleBinding#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.user">user</a></code> | <code>string</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.role"></a>

```typescript
public readonly role: GkeHubScopeRbacRoleBindingRole;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#role GkeHubScopeRbacRoleBinding#role}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

Id of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_id GkeHubScopeRbacRoleBinding#scope_id}

---

##### `scopeRbacRoleBindingId`<sup>Required</sup> <a name="scopeRbacRoleBindingId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId"></a>

```typescript
public readonly scopeRbacRoleBindingId: string;
```

- *Type:* string

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_rbac_role_binding_id GkeHubScopeRbacRoleBinding#scope_rbac_role_binding_id}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#group GkeHubScopeRbacRoleBinding#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#id GkeHubScopeRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels for this ScopeRBACRoleBinding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#labels GkeHubScopeRbacRoleBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#project GkeHubScopeRbacRoleBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GkeHubScopeRbacRoleBindingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#timeouts GkeHubScopeRbacRoleBinding#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#user GkeHubScopeRbacRoleBinding#user}

---

### GkeHubScopeRbacRoleBindingRole <a name="GkeHubScopeRbacRoleBindingRole" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.Initializer"></a>

```typescript
import { gkeHubScopeRbacRoleBinding } from '@cdktf/provider-google'

const gkeHubScopeRbacRoleBindingRole: gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.property.predefinedRole">predefinedRole</a></code> | <code>string</code> | PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"]. |

---

##### `predefinedRole`<sup>Optional</sup> <a name="predefinedRole" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.property.predefinedRole"></a>

```typescript
public readonly predefinedRole: string;
```

- *Type:* string

PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#predefined_role GkeHubScopeRbacRoleBinding#predefined_role}

---

### GkeHubScopeRbacRoleBindingState <a name="GkeHubScopeRbacRoleBindingState" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState.Initializer"></a>

```typescript
import { gkeHubScopeRbacRoleBinding } from '@cdktf/provider-google'

const gkeHubScopeRbacRoleBindingState: gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState = { ... }
```


### GkeHubScopeRbacRoleBindingTimeouts <a name="GkeHubScopeRbacRoleBindingTimeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.Initializer"></a>

```typescript
import { gkeHubScopeRbacRoleBinding } from '@cdktf/provider-google'

const gkeHubScopeRbacRoleBindingTimeouts: gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#create GkeHubScopeRbacRoleBinding#create}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#delete GkeHubScopeRbacRoleBinding#delete}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#update GkeHubScopeRbacRoleBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#create GkeHubScopeRbacRoleBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#delete GkeHubScopeRbacRoleBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gke_hub_scope_rbac_role_binding#update GkeHubScopeRbacRoleBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubScopeRbacRoleBindingRoleOutputReference <a name="GkeHubScopeRbacRoleBindingRoleOutputReference" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer"></a>

```typescript
import { gkeHubScopeRbacRoleBinding } from '@cdktf/provider-google'

new gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole">resetPredefinedRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredefinedRole` <a name="resetPredefinedRole" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole"></a>

```typescript
public resetPredefinedRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput">predefinedRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole">predefinedRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedRoleInput`<sup>Optional</sup> <a name="predefinedRoleInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput"></a>

```typescript
public readonly predefinedRoleInput: string;
```

- *Type:* string

---

##### `predefinedRole`<sup>Required</sup> <a name="predefinedRole" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole"></a>

```typescript
public readonly predefinedRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubScopeRbacRoleBindingRole;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

---


### GkeHubScopeRbacRoleBindingStateList <a name="GkeHubScopeRbacRoleBindingStateList" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer"></a>

```typescript
import { gkeHubScopeRbacRoleBinding } from '@cdktf/provider-google'

new gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.get"></a>

```typescript
public get(index: number): GkeHubScopeRbacRoleBindingStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeHubScopeRbacRoleBindingStateOutputReference <a name="GkeHubScopeRbacRoleBindingStateOutputReference" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer"></a>

```typescript
import { gkeHubScopeRbacRoleBinding } from '@cdktf/provider-google'

new gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState">GkeHubScopeRbacRoleBindingState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubScopeRbacRoleBindingState;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState">GkeHubScopeRbacRoleBindingState</a>

---


### GkeHubScopeRbacRoleBindingTimeoutsOutputReference <a name="GkeHubScopeRbacRoleBindingTimeoutsOutputReference" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { gkeHubScopeRbacRoleBinding } from '@cdktf/provider-google'

new gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubScopeRbacRoleBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>

---



