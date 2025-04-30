# `storageBucket` Submodule <a name="`storageBucket` Submodule" id="@cdktf/provider-google.storageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucket <a name="StorageBucket" id="@cdktf/provider-google.storageBucket.StorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket google_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucket;

StorageBucket.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .autoclass(StorageBucketAutoclass)
//  .cors(IResolvable)
//  .cors(java.util.List<StorageBucketCors>)
//  .customPlacementConfig(StorageBucketCustomPlacementConfig)
//  .defaultEventBasedHold(java.lang.Boolean)
//  .defaultEventBasedHold(IResolvable)
//  .enableObjectRetention(java.lang.Boolean)
//  .enableObjectRetention(IResolvable)
//  .encryption(StorageBucketEncryption)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .hierarchicalNamespace(StorageBucketHierarchicalNamespace)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .lifecycleRule(IResolvable)
//  .lifecycleRule(java.util.List<StorageBucketLifecycleRule>)
//  .logging(StorageBucketLogging)
//  .project(java.lang.String)
//  .publicAccessPrevention(java.lang.String)
//  .requesterPays(java.lang.Boolean)
//  .requesterPays(IResolvable)
//  .retentionPolicy(StorageBucketRetentionPolicy)
//  .rpo(java.lang.String)
//  .softDeletePolicy(StorageBucketSoftDeletePolicy)
//  .storageClass(java.lang.String)
//  .timeouts(StorageBucketTimeouts)
//  .uniformBucketLevelAccess(java.lang.Boolean)
//  .uniformBucketLevelAccess(IResolvable)
//  .versioning(StorageBucketVersioning)
//  .website(StorageBucketWebsite)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The Google Cloud Storage location or region. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | autoclass block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.cors">cors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>></code> | cors block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.customPlacementConfig">customPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | custom_placement_config block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.defaultEventBasedHold">defaultEventBasedHold</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to automatically apply an eventBasedHold to new objects added to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.enableObjectRetention">enableObjectRetention</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When deleting a bucket, this boolean option will delete all contained objects, or anywhereCaches (if any). |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.hierarchicalNamespace">hierarchicalNamespace</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a></code> | hierarchical_namespace block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#id StorageBucket#id}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.lifecycleRule">lifecycleRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>></code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.publicAccessPrevention">publicAccessPrevention</a></code> | <code>java.lang.String</code> | Prevents public access to a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables Requester Pays on a storage bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.rpo">rpo</a></code> | <code>java.lang.String</code> | Specifies the RPO setting of bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.softDeletePolicy">softDeletePolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a></code> | soft_delete_policy block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.uniformBucketLevelAccess">uniformBucketLevelAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables uniform bucket-level access on a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.website">website</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | website block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The Google Cloud Storage location or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#location StorageBucket#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#name StorageBucket#name}

---

##### `autoclass`<sup>Optional</sup> <a name="autoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.autoclass"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

autoclass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#autoclass StorageBucket#autoclass}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.cors"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#cors StorageBucket#cors}

---

##### `customPlacementConfig`<sup>Optional</sup> <a name="customPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.customPlacementConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

custom_placement_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#custom_placement_config StorageBucket#custom_placement_config}

---

##### `defaultEventBasedHold`<sup>Optional</sup> <a name="defaultEventBasedHold" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.defaultEventBasedHold"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#default_event_based_hold StorageBucket#default_event_based_hold}

---

##### `enableObjectRetention`<sup>Optional</sup> <a name="enableObjectRetention" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.enableObjectRetention"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#enable_object_retention StorageBucket#enable_object_retention}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#encryption StorageBucket#encryption}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When deleting a bucket, this boolean option will delete all contained objects, or anywhereCaches (if any).

If you try to delete a bucket that contains objects or anywhereCaches, Terraform will fail that run, deleting anywhereCaches may take 80 minutes to complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#force_destroy StorageBucket#force_destroy}

---

##### `hierarchicalNamespace`<sup>Optional</sup> <a name="hierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.hierarchicalNamespace"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a>

hierarchical_namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#hierarchical_namespace StorageBucket#hierarchical_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#id StorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#labels StorageBucket#labels}

---

##### `lifecycleRule`<sup>Optional</sup> <a name="lifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.lifecycleRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>>

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#lifecycle_rule StorageBucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#logging StorageBucket#logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#project StorageBucket#project}

---

##### `publicAccessPrevention`<sup>Optional</sup> <a name="publicAccessPrevention" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.publicAccessPrevention"></a>

- *Type:* java.lang.String

Prevents public access to a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#public_access_prevention StorageBucket#public_access_prevention}

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.requesterPays"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables Requester Pays on a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#requester_pays StorageBucket#requester_pays}

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.retentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#retention_policy StorageBucket#retention_policy}

---

##### `rpo`<sup>Optional</sup> <a name="rpo" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.rpo"></a>

- *Type:* java.lang.String

Specifies the RPO setting of bucket.

If set 'ASYNC_TURBO', The Turbo Replication will be enabled for the dual-region bucket. Value 'DEFAULT' will set RPO setting to default. Turbo Replication is only for buckets in dual-regions.See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#rpo StorageBucket#rpo}

---

##### `softDeletePolicy`<sup>Optional</sup> <a name="softDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.softDeletePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a>

soft_delete_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#soft_delete_policy StorageBucket#soft_delete_policy}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.storageClass"></a>

- *Type:* java.lang.String

The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#storage_class StorageBucket#storage_class}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#timeouts StorageBucket#timeouts}

---

##### `uniformBucketLevelAccess`<sup>Optional</sup> <a name="uniformBucketLevelAccess" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.uniformBucketLevelAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables uniform bucket-level access on a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#uniform_bucket_level_access StorageBucket#uniform_bucket_level_access}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.versioning"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#versioning StorageBucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.website"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#website StorageBucket#website}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass">putAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig">putCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putHierarchicalNamespace">putHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule">putLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putSoftDeletePolicy">putSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putVersioning">putVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putWebsite">putWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetAutoclass">resetAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetCustomPlacementConfig">resetCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetDefaultEventBasedHold">resetDefaultEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetEnableObjectRetention">resetEnableObjectRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetHierarchicalNamespace">resetHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLifecycleRule">resetLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetPublicAccessPrevention">resetPublicAccessPrevention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetRequesterPays">resetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetRpo">resetRpo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetSoftDeletePolicy">resetSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetUniformBucketLevelAccess">resetUniformBucketLevelAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetVersioning">resetVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetWebsite">resetWebsite</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageBucket.StorageBucket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.storageBucket.StorageBucket.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageBucket.StorageBucket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageBucket.StorageBucket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.storageBucket.StorageBucket.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageBucket.StorageBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.storageBucket.StorageBucket.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.storageBucket.StorageBucket.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucket.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.storageBucket.StorageBucket.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.storageBucket.StorageBucket.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageBucket.StorageBucket.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageBucket.StorageBucket.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.storageBucket.StorageBucket.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoclass` <a name="putAutoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass"></a>

```java
public void putAutoclass(StorageBucketAutoclass value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---

##### `putCors` <a name="putCors" id="@cdktf/provider-google.storageBucket.StorageBucket.putCors"></a>

```java
public void putCors(IResolvable OR java.util.List<StorageBucketCors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putCors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>>

---

##### `putCustomPlacementConfig` <a name="putCustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig"></a>

```java
public void putCustomPlacementConfig(StorageBucketCustomPlacementConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---

##### `putEncryption` <a name="putEncryption" id="@cdktf/provider-google.storageBucket.StorageBucket.putEncryption"></a>

```java
public void putEncryption(StorageBucketEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---

##### `putHierarchicalNamespace` <a name="putHierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucket.putHierarchicalNamespace"></a>

```java
public void putHierarchicalNamespace(StorageBucketHierarchicalNamespace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putHierarchicalNamespace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a>

---

##### `putLifecycleRule` <a name="putLifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule"></a>

```java
public void putLifecycleRule(IResolvable OR java.util.List<StorageBucketLifecycleRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>>

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-google.storageBucket.StorageBucket.putLogging"></a>

```java
public void putLogging(StorageBucketLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy"></a>

```java
public void putRetentionPolicy(StorageBucketRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---

##### `putSoftDeletePolicy` <a name="putSoftDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.putSoftDeletePolicy"></a>

```java
public void putSoftDeletePolicy(StorageBucketSoftDeletePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putSoftDeletePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts"></a>

```java
public void putTimeouts(StorageBucketTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

---

##### `putVersioning` <a name="putVersioning" id="@cdktf/provider-google.storageBucket.StorageBucket.putVersioning"></a>

```java
public void putVersioning(StorageBucketVersioning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putVersioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---

##### `putWebsite` <a name="putWebsite" id="@cdktf/provider-google.storageBucket.StorageBucket.putWebsite"></a>

```java
public void putWebsite(StorageBucketWebsite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---

##### `resetAutoclass` <a name="resetAutoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.resetAutoclass"></a>

```java
public void resetAutoclass()
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-google.storageBucket.StorageBucket.resetCors"></a>

```java
public void resetCors()
```

##### `resetCustomPlacementConfig` <a name="resetCustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucket.resetCustomPlacementConfig"></a>

```java
public void resetCustomPlacementConfig()
```

##### `resetDefaultEventBasedHold` <a name="resetDefaultEventBasedHold" id="@cdktf/provider-google.storageBucket.StorageBucket.resetDefaultEventBasedHold"></a>

```java
public void resetDefaultEventBasedHold()
```

##### `resetEnableObjectRetention` <a name="resetEnableObjectRetention" id="@cdktf/provider-google.storageBucket.StorageBucket.resetEnableObjectRetention"></a>

```java
public void resetEnableObjectRetention()
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-google.storageBucket.StorageBucket.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-google.storageBucket.StorageBucket.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetHierarchicalNamespace` <a name="resetHierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucket.resetHierarchicalNamespace"></a>

```java
public void resetHierarchicalNamespace()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageBucket.StorageBucket.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLifecycleRule` <a name="resetLifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLifecycleRule"></a>

```java
public void resetLifecycleRule()
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLogging"></a>

```java
public void resetLogging()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.storageBucket.StorageBucket.resetProject"></a>

```java
public void resetProject()
```

##### `resetPublicAccessPrevention` <a name="resetPublicAccessPrevention" id="@cdktf/provider-google.storageBucket.StorageBucket.resetPublicAccessPrevention"></a>

```java
public void resetPublicAccessPrevention()
```

##### `resetRequesterPays` <a name="resetRequesterPays" id="@cdktf/provider-google.storageBucket.StorageBucket.resetRequesterPays"></a>

```java
public void resetRequesterPays()
```

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.resetRetentionPolicy"></a>

```java
public void resetRetentionPolicy()
```

##### `resetRpo` <a name="resetRpo" id="@cdktf/provider-google.storageBucket.StorageBucket.resetRpo"></a>

```java
public void resetRpo()
```

##### `resetSoftDeletePolicy` <a name="resetSoftDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.resetSoftDeletePolicy"></a>

```java
public void resetSoftDeletePolicy()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucket.resetStorageClass"></a>

```java
public void resetStorageClass()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUniformBucketLevelAccess` <a name="resetUniformBucketLevelAccess" id="@cdktf/provider-google.storageBucket.StorageBucket.resetUniformBucketLevelAccess"></a>

```java
public void resetUniformBucketLevelAccess()
```

##### `resetVersioning` <a name="resetVersioning" id="@cdktf/provider-google.storageBucket.StorageBucket.resetVersioning"></a>

```java
public void resetVersioning()
```

##### `resetWebsite` <a name="resetWebsite" id="@cdktf/provider-google.storageBucket.StorageBucket.resetWebsite"></a>

```java
public void resetWebsite()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageBucket.StorageBucket.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucket;

StorageBucket.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucket.StorageBucket.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucket;

StorageBucket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucket;

StorageBucket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucket;

StorageBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StorageBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference">StorageBucketAutoclassOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList">StorageBucketCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfig">customPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference">StorageBucketCustomPlacementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference">StorageBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.hierarchicalNamespace">hierarchicalNamespace</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference">StorageBucketHierarchicalNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRule">lifecycleRule</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList">StorageBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference">StorageBucketLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.projectNumber">projectNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference">StorageBucketRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.softDeletePolicy">softDeletePolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference">StorageBucketSoftDeletePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference">StorageBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.updated">updated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference">StorageBucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference">StorageBucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.autoclassInput">autoclassInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.corsInput">corsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfigInput">customPlacementConfigInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHoldInput">defaultEventBasedHoldInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetentionInput">enableObjectRetentionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.encryptionInput">encryptionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.hierarchicalNamespaceInput">hierarchicalNamespaceInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRuleInput">lifecycleRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPreventionInput">publicAccessPreventionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPaysInput">requesterPaysInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.rpoInput">rpoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.softDeletePolicyInput">softDeletePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccessInput">uniformBucketLevelAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.versioningInput">versioningInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.websiteInput">websiteInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHold">defaultEventBasedHold</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetention">enableObjectRetention</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPrevention">publicAccessPrevention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.rpo">rpo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccess">uniformBucketLevelAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageBucket.StorageBucket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageBucket.StorageBucket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageBucket.StorageBucket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucket.StorageBucket.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucket.StorageBucket.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageBucket.StorageBucket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucket.StorageBucket.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoclass`<sup>Required</sup> <a name="autoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.property.autoclass"></a>

```java
public StorageBucketAutoclassOutputReference getAutoclass();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference">StorageBucketAutoclassOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-google.storageBucket.StorageBucket.property.cors"></a>

```java
public StorageBucketCorsList getCors();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList">StorageBucketCorsList</a>

---

##### `customPlacementConfig`<sup>Required</sup> <a name="customPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfig"></a>

```java
public StorageBucketCustomPlacementConfigOutputReference getCustomPlacementConfig();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference">StorageBucketCustomPlacementConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.storageBucket.StorageBucket.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-google.storageBucket.StorageBucket.property.encryption"></a>

```java
public StorageBucketEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference">StorageBucketEncryptionOutputReference</a>

---

##### `hierarchicalNamespace`<sup>Required</sup> <a name="hierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucket.property.hierarchicalNamespace"></a>

```java
public StorageBucketHierarchicalNamespaceOutputReference getHierarchicalNamespace();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference">StorageBucketHierarchicalNamespaceOutputReference</a>

---

##### `lifecycleRule`<sup>Required</sup> <a name="lifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRule"></a>

```java
public StorageBucketLifecycleRuleList getLifecycleRule();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList">StorageBucketLifecycleRuleList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-google.storageBucket.StorageBucket.property.logging"></a>

```java
public StorageBucketLoggingOutputReference getLogging();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference">StorageBucketLoggingOutputReference</a>

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google.storageBucket.StorageBucket.property.projectNumber"></a>

```java
public java.lang.Number getProjectNumber();
```

- *Type:* java.lang.Number

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicy"></a>

```java
public StorageBucketRetentionPolicyOutputReference getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference">StorageBucketRetentionPolicyOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.storageBucket.StorageBucket.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `softDeletePolicy`<sup>Required</sup> <a name="softDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.property.softDeletePolicy"></a>

```java
public StorageBucketSoftDeletePolicyOutputReference getSoftDeletePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference">StorageBucketSoftDeletePolicyOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="@cdktf/provider-google.storageBucket.StorageBucket.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.property.timeouts"></a>

```java
public StorageBucketTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference">StorageBucketTimeoutsOutputReference</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-google.storageBucket.StorageBucket.property.updated"></a>

```java
public java.lang.String getUpdated();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.storageBucket.StorageBucket.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-google.storageBucket.StorageBucket.property.versioning"></a>

```java
public StorageBucketVersioningOutputReference getVersioning();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference">StorageBucketVersioningOutputReference</a>

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-google.storageBucket.StorageBucket.property.website"></a>

```java
public StorageBucketWebsiteOutputReference getWebsite();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference">StorageBucketWebsiteOutputReference</a>

---

##### `autoclassInput`<sup>Optional</sup> <a name="autoclassInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.autoclassInput"></a>

```java
public StorageBucketAutoclass getAutoclassInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.corsInput"></a>

```java
public java.lang.Object getCorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>>

---

##### `customPlacementConfigInput`<sup>Optional</sup> <a name="customPlacementConfigInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfigInput"></a>

```java
public StorageBucketCustomPlacementConfig getCustomPlacementConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---

##### `defaultEventBasedHoldInput`<sup>Optional</sup> <a name="defaultEventBasedHoldInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHoldInput"></a>

```java
public java.lang.Object getDefaultEventBasedHoldInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableObjectRetentionInput`<sup>Optional</sup> <a name="enableObjectRetentionInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetentionInput"></a>

```java
public java.lang.Object getEnableObjectRetentionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.encryptionInput"></a>

```java
public StorageBucketEncryption getEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hierarchicalNamespaceInput`<sup>Optional</sup> <a name="hierarchicalNamespaceInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.hierarchicalNamespaceInput"></a>

```java
public StorageBucketHierarchicalNamespace getHierarchicalNamespaceInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `lifecycleRuleInput`<sup>Optional</sup> <a name="lifecycleRuleInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRuleInput"></a>

```java
public java.lang.Object getLifecycleRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.loggingInput"></a>

```java
public StorageBucketLogging getLoggingInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `publicAccessPreventionInput`<sup>Optional</sup> <a name="publicAccessPreventionInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPreventionInput"></a>

```java
public java.lang.String getPublicAccessPreventionInput();
```

- *Type:* java.lang.String

---

##### `requesterPaysInput`<sup>Optional</sup> <a name="requesterPaysInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPaysInput"></a>

```java
public java.lang.Object getRequesterPaysInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicyInput"></a>

```java
public StorageBucketRetentionPolicy getRetentionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---

##### `rpoInput`<sup>Optional</sup> <a name="rpoInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.rpoInput"></a>

```java
public java.lang.String getRpoInput();
```

- *Type:* java.lang.String

---

##### `softDeletePolicyInput`<sup>Optional</sup> <a name="softDeletePolicyInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.softDeletePolicyInput"></a>

```java
public StorageBucketSoftDeletePolicy getSoftDeletePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a>

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

---

##### `uniformBucketLevelAccessInput`<sup>Optional</sup> <a name="uniformBucketLevelAccessInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccessInput"></a>

```java
public java.lang.Object getUniformBucketLevelAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versioningInput`<sup>Optional</sup> <a name="versioningInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.versioningInput"></a>

```java
public StorageBucketVersioning getVersioningInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---

##### `websiteInput`<sup>Optional</sup> <a name="websiteInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.websiteInput"></a>

```java
public StorageBucketWebsite getWebsiteInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---

##### `defaultEventBasedHold`<sup>Required</sup> <a name="defaultEventBasedHold" id="@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHold"></a>

```java
public java.lang.Object getDefaultEventBasedHold();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableObjectRetention`<sup>Required</sup> <a name="enableObjectRetention" id="@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetention"></a>

```java
public java.lang.Object getEnableObjectRetention();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.storageBucket.StorageBucket.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.storageBucket.StorageBucket.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucket.StorageBucket.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.storageBucket.StorageBucket.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `publicAccessPrevention`<sup>Required</sup> <a name="publicAccessPrevention" id="@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPrevention"></a>

```java
public java.lang.String getPublicAccessPrevention();
```

- *Type:* java.lang.String

---

##### `requesterPays`<sup>Required</sup> <a name="requesterPays" id="@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPays"></a>

```java
public java.lang.Object getRequesterPays();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rpo`<sup>Required</sup> <a name="rpo" id="@cdktf/provider-google.storageBucket.StorageBucket.property.rpo"></a>

```java
public java.lang.String getRpo();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucket.StorageBucket.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `uniformBucketLevelAccess`<sup>Required</sup> <a name="uniformBucketLevelAccess" id="@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccess"></a>

```java
public java.lang.Object getUniformBucketLevelAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageBucket.StorageBucket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketAutoclass <a name="StorageBucketAutoclass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketAutoclass;

StorageBucketAutoclass.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .terminalStorageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.terminalStorageClass">terminalStorageClass</a></code> | <code>java.lang.String</code> | The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#enabled StorageBucket#enabled}

---

##### `terminalStorageClass`<sup>Optional</sup> <a name="terminalStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.terminalStorageClass"></a>

```java
public java.lang.String getTerminalStorageClass();
```

- *Type:* java.lang.String

The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time.

Supported values include: NEARLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#terminal_storage_class StorageBucket#terminal_storage_class}

---

### StorageBucketConfig <a name="StorageBucketConfig" id="@cdktf/provider-google.storageBucket.StorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketConfig;

StorageBucketConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .autoclass(StorageBucketAutoclass)
//  .cors(IResolvable)
//  .cors(java.util.List<StorageBucketCors>)
//  .customPlacementConfig(StorageBucketCustomPlacementConfig)
//  .defaultEventBasedHold(java.lang.Boolean)
//  .defaultEventBasedHold(IResolvable)
//  .enableObjectRetention(java.lang.Boolean)
//  .enableObjectRetention(IResolvable)
//  .encryption(StorageBucketEncryption)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .hierarchicalNamespace(StorageBucketHierarchicalNamespace)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .lifecycleRule(IResolvable)
//  .lifecycleRule(java.util.List<StorageBucketLifecycleRule>)
//  .logging(StorageBucketLogging)
//  .project(java.lang.String)
//  .publicAccessPrevention(java.lang.String)
//  .requesterPays(java.lang.Boolean)
//  .requesterPays(IResolvable)
//  .retentionPolicy(StorageBucketRetentionPolicy)
//  .rpo(java.lang.String)
//  .softDeletePolicy(StorageBucketSoftDeletePolicy)
//  .storageClass(java.lang.String)
//  .timeouts(StorageBucketTimeouts)
//  .uniformBucketLevelAccess(java.lang.Boolean)
//  .uniformBucketLevelAccess(IResolvable)
//  .versioning(StorageBucketVersioning)
//  .website(StorageBucketWebsite)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.location">location</a></code> | <code>java.lang.String</code> | The Google Cloud Storage location or region. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | autoclass block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.cors">cors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>></code> | cors block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.customPlacementConfig">customPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | custom_placement_config block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.defaultEventBasedHold">defaultEventBasedHold</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to automatically apply an eventBasedHold to new objects added to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.enableObjectRetention">enableObjectRetention</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When deleting a bucket, this boolean option will delete all contained objects, or anywhereCaches (if any). |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.hierarchicalNamespace">hierarchicalNamespace</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a></code> | hierarchical_namespace block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#id StorageBucket#id}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycleRule">lifecycleRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>></code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.publicAccessPrevention">publicAccessPrevention</a></code> | <code>java.lang.String</code> | Prevents public access to a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables Requester Pays on a storage bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.rpo">rpo</a></code> | <code>java.lang.String</code> | Specifies the RPO setting of bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.softDeletePolicy">softDeletePolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a></code> | soft_delete_policy block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.uniformBucketLevelAccess">uniformBucketLevelAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables uniform bucket-level access on a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.website">website</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | website block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The Google Cloud Storage location or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#location StorageBucket#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#name StorageBucket#name}

---

##### `autoclass`<sup>Optional</sup> <a name="autoclass" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.autoclass"></a>

```java
public StorageBucketAutoclass getAutoclass();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

autoclass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#autoclass StorageBucket#autoclass}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.cors"></a>

```java
public java.lang.Object getCors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#cors StorageBucket#cors}

---

##### `customPlacementConfig`<sup>Optional</sup> <a name="customPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.customPlacementConfig"></a>

```java
public StorageBucketCustomPlacementConfig getCustomPlacementConfig();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

custom_placement_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#custom_placement_config StorageBucket#custom_placement_config}

---

##### `defaultEventBasedHold`<sup>Optional</sup> <a name="defaultEventBasedHold" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.defaultEventBasedHold"></a>

```java
public java.lang.Object getDefaultEventBasedHold();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#default_event_based_hold StorageBucket#default_event_based_hold}

---

##### `enableObjectRetention`<sup>Optional</sup> <a name="enableObjectRetention" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.enableObjectRetention"></a>

```java
public java.lang.Object getEnableObjectRetention();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#enable_object_retention StorageBucket#enable_object_retention}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.encryption"></a>

```java
public StorageBucketEncryption getEncryption();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#encryption StorageBucket#encryption}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When deleting a bucket, this boolean option will delete all contained objects, or anywhereCaches (if any).

If you try to delete a bucket that contains objects or anywhereCaches, Terraform will fail that run, deleting anywhereCaches may take 80 minutes to complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#force_destroy StorageBucket#force_destroy}

---

##### `hierarchicalNamespace`<sup>Optional</sup> <a name="hierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.hierarchicalNamespace"></a>

```java
public StorageBucketHierarchicalNamespace getHierarchicalNamespace();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a>

hierarchical_namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#hierarchical_namespace StorageBucket#hierarchical_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#id StorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#labels StorageBucket#labels}

---

##### `lifecycleRule`<sup>Optional</sup> <a name="lifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycleRule"></a>

```java
public java.lang.Object getLifecycleRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>>

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#lifecycle_rule StorageBucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.logging"></a>

```java
public StorageBucketLogging getLogging();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#logging StorageBucket#logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#project StorageBucket#project}

---

##### `publicAccessPrevention`<sup>Optional</sup> <a name="publicAccessPrevention" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.publicAccessPrevention"></a>

```java
public java.lang.String getPublicAccessPrevention();
```

- *Type:* java.lang.String

Prevents public access to a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#public_access_prevention StorageBucket#public_access_prevention}

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.requesterPays"></a>

```java
public java.lang.Object getRequesterPays();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables Requester Pays on a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#requester_pays StorageBucket#requester_pays}

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.retentionPolicy"></a>

```java
public StorageBucketRetentionPolicy getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#retention_policy StorageBucket#retention_policy}

---

##### `rpo`<sup>Optional</sup> <a name="rpo" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.rpo"></a>

```java
public java.lang.String getRpo();
```

- *Type:* java.lang.String

Specifies the RPO setting of bucket.

If set 'ASYNC_TURBO', The Turbo Replication will be enabled for the dual-region bucket. Value 'DEFAULT' will set RPO setting to default. Turbo Replication is only for buckets in dual-regions.See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#rpo StorageBucket#rpo}

---

##### `softDeletePolicy`<sup>Optional</sup> <a name="softDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.softDeletePolicy"></a>

```java
public StorageBucketSoftDeletePolicy getSoftDeletePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a>

soft_delete_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#soft_delete_policy StorageBucket#soft_delete_policy}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#storage_class StorageBucket#storage_class}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.timeouts"></a>

```java
public StorageBucketTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#timeouts StorageBucket#timeouts}

---

##### `uniformBucketLevelAccess`<sup>Optional</sup> <a name="uniformBucketLevelAccess" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.uniformBucketLevelAccess"></a>

```java
public java.lang.Object getUniformBucketLevelAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables uniform bucket-level access on a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#uniform_bucket_level_access StorageBucket#uniform_bucket_level_access}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.versioning"></a>

```java
public StorageBucketVersioning getVersioning();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#versioning StorageBucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.website"></a>

```java
public StorageBucketWebsite getWebsite();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#website StorageBucket#website}

---

### StorageBucketCors <a name="StorageBucketCors" id="@cdktf/provider-google.storageBucket.StorageBucketCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketCors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketCors;

StorageBucketCors.builder()
//  .maxAgeSeconds(java.lang.Number)
//  .method(java.util.List<java.lang.String>)
//  .origin(java.util.List<java.lang.String>)
//  .responseHeader(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>java.lang.Number</code> | The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method". |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.origin">origin</a></code> | <code>java.util.List<java.lang.String></code> | The list of Origins eligible to receive CORS response headers. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.responseHeader">responseHeader</a></code> | <code>java.util.List<java.lang.String></code> | The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains. |

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="maxAgeSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.maxAgeSeconds"></a>

```java
public java.lang.Number getMaxAgeSeconds();
```

- *Type:* java.lang.Number

The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#max_age_seconds StorageBucket#max_age_seconds}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#method StorageBucket#method}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.origin"></a>

```java
public java.util.List<java.lang.String> getOrigin();
```

- *Type:* java.util.List<java.lang.String>

The list of Origins eligible to receive CORS response headers.

Note: "*" is permitted in the list of origins, and means "any Origin".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#origin StorageBucket#origin}

---

##### `responseHeader`<sup>Optional</sup> <a name="responseHeader" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.responseHeader"></a>

```java
public java.util.List<java.lang.String> getResponseHeader();
```

- *Type:* java.util.List<java.lang.String>

The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#response_header StorageBucket#response_header}

---

### StorageBucketCustomPlacementConfig <a name="StorageBucketCustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketCustomPlacementConfig;

StorageBucketCustomPlacementConfig.builder()
    .dataLocations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.property.dataLocations">dataLocations</a></code> | <code>java.util.List<java.lang.String></code> | The list of individual regions that comprise a dual-region bucket. |

---

##### `dataLocations`<sup>Required</sup> <a name="dataLocations" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.property.dataLocations"></a>

```java
public java.util.List<java.lang.String> getDataLocations();
```

- *Type:* java.util.List<java.lang.String>

The list of individual regions that comprise a dual-region bucket.

See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#data_locations StorageBucket#data_locations}

---

### StorageBucketEncryption <a name="StorageBucketEncryption" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketEncryption;

StorageBucketEncryption.builder()
    .defaultKmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption.property.defaultKmsKeyName">defaultKmsKeyName</a></code> | <code>java.lang.String</code> | A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. |

---

##### `defaultKmsKeyName`<sup>Required</sup> <a name="defaultKmsKeyName" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption.property.defaultKmsKeyName"></a>

```java
public java.lang.String getDefaultKmsKeyName();
```

- *Type:* java.lang.String

A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.

You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#default_kms_key_name StorageBucket#default_kms_key_name}

---

### StorageBucketHierarchicalNamespace <a name="StorageBucketHierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketHierarchicalNamespace;

StorageBucketHierarchicalNamespace.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set this field true to organize bucket with logical file system structure. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set this field true to organize bucket with logical file system structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#enabled StorageBucket#enabled}

---

### StorageBucketLifecycleRule <a name="StorageBucketLifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketLifecycleRule;

StorageBucketLifecycleRule.builder()
    .action(StorageBucketLifecycleRuleAction)
    .condition(StorageBucketLifecycleRuleCondition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | condition block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.action"></a>

```java
public StorageBucketLifecycleRuleAction getAction();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#action StorageBucket#action}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.condition"></a>

```java
public StorageBucketLifecycleRuleCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#condition StorageBucket#condition}

---

### StorageBucketLifecycleRuleAction <a name="StorageBucketLifecycleRuleAction" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketLifecycleRuleAction;

StorageBucketLifecycleRuleAction.builder()
    .type(java.lang.String)
//  .storageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.type">type</a></code> | <code>java.lang.String</code> | The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#type StorageBucket#type}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#storage_class StorageBucket#storage_class}

---

### StorageBucketLifecycleRuleCondition <a name="StorageBucketLifecycleRuleCondition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketLifecycleRuleCondition;

StorageBucketLifecycleRuleCondition.builder()
//  .age(java.lang.Number)
//  .createdBefore(java.lang.String)
//  .customTimeBefore(java.lang.String)
//  .daysSinceCustomTime(java.lang.Number)
//  .daysSinceNoncurrentTime(java.lang.Number)
//  .matchesPrefix(java.util.List<java.lang.String>)
//  .matchesStorageClass(java.util.List<java.lang.String>)
//  .matchesSuffix(java.util.List<java.lang.String>)
//  .noncurrentTimeBefore(java.lang.String)
//  .numNewerVersions(java.lang.Number)
//  .sendAgeIfZero(java.lang.Boolean)
//  .sendAgeIfZero(IResolvable)
//  .sendDaysSinceCustomTimeIfZero(java.lang.Boolean)
//  .sendDaysSinceCustomTimeIfZero(IResolvable)
//  .sendDaysSinceNoncurrentTimeIfZero(java.lang.Boolean)
//  .sendDaysSinceNoncurrentTimeIfZero(IResolvable)
//  .sendNumNewerVersionsIfZero(java.lang.Boolean)
//  .sendNumNewerVersionsIfZero(IResolvable)
//  .withState(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.age">age</a></code> | <code>java.lang.Number</code> | Minimum age of an object in days to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.customTimeBefore">customTimeBefore</a></code> | <code>java.lang.String</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceCustomTime">daysSinceCustomTime</a></code> | <code>java.lang.Number</code> | Number of days elapsed since the user-specified timestamp set on an object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime">daysSinceNoncurrentTime</a></code> | <code>java.lang.Number</code> | Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesPrefix">matchesPrefix</a></code> | <code>java.util.List<java.lang.String></code> | One or more matching name prefixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesStorageClass">matchesStorageClass</a></code> | <code>java.util.List<java.lang.String></code> | Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesSuffix">matchesSuffix</a></code> | <code>java.util.List<java.lang.String></code> | One or more matching name suffixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore">noncurrentTimeBefore</a></code> | <code>java.lang.String</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.numNewerVersions">numNewerVersions</a></code> | <code>java.lang.Number</code> | Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendAgeIfZero">sendAgeIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | While set true, age value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendDaysSinceCustomTimeIfZero">sendDaysSinceCustomTimeIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | While set true, days_since_custom_time value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendDaysSinceNoncurrentTimeIfZero">sendDaysSinceNoncurrentTimeIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendNumNewerVersionsIfZero">sendNumNewerVersionsIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | While set true, num_newer_versions value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.withState">withState</a></code> | <code>java.lang.String</code> | Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY". |

---

##### `age`<sup>Optional</sup> <a name="age" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.age"></a>

```java
public java.lang.Number getAge();
```

- *Type:* java.lang.Number

Minimum age of an object in days to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#age StorageBucket#age}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#created_before StorageBucket#created_before}

---

##### `customTimeBefore`<sup>Optional</sup> <a name="customTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.customTimeBefore"></a>

```java
public java.lang.String getCustomTimeBefore();
```

- *Type:* java.lang.String

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#custom_time_before StorageBucket#custom_time_before}

---

##### `daysSinceCustomTime`<sup>Optional</sup> <a name="daysSinceCustomTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceCustomTime"></a>

```java
public java.lang.Number getDaysSinceCustomTime();
```

- *Type:* java.lang.Number

Number of days elapsed since the user-specified timestamp set on an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#days_since_custom_time StorageBucket#days_since_custom_time}

---

##### `daysSinceNoncurrentTime`<sup>Optional</sup> <a name="daysSinceNoncurrentTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime"></a>

```java
public java.lang.Number getDaysSinceNoncurrentTime();
```

- *Type:* java.lang.Number

Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#days_since_noncurrent_time StorageBucket#days_since_noncurrent_time}

---

##### `matchesPrefix`<sup>Optional</sup> <a name="matchesPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesPrefix"></a>

```java
public java.util.List<java.lang.String> getMatchesPrefix();
```

- *Type:* java.util.List<java.lang.String>

One or more matching name prefixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#matches_prefix StorageBucket#matches_prefix}

---

##### `matchesStorageClass`<sup>Optional</sup> <a name="matchesStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesStorageClass"></a>

```java
public java.util.List<java.lang.String> getMatchesStorageClass();
```

- *Type:* java.util.List<java.lang.String>

Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#matches_storage_class StorageBucket#matches_storage_class}

---

##### `matchesSuffix`<sup>Optional</sup> <a name="matchesSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesSuffix"></a>

```java
public java.util.List<java.lang.String> getMatchesSuffix();
```

- *Type:* java.util.List<java.lang.String>

One or more matching name suffixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#matches_suffix StorageBucket#matches_suffix}

---

##### `noncurrentTimeBefore`<sup>Optional</sup> <a name="noncurrentTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore"></a>

```java
public java.lang.String getNoncurrentTimeBefore();
```

- *Type:* java.lang.String

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#noncurrent_time_before StorageBucket#noncurrent_time_before}

---

##### `numNewerVersions`<sup>Optional</sup> <a name="numNewerVersions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.numNewerVersions"></a>

```java
public java.lang.Number getNumNewerVersions();
```

- *Type:* java.lang.Number

Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#num_newer_versions StorageBucket#num_newer_versions}

---

##### `sendAgeIfZero`<sup>Optional</sup> <a name="sendAgeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendAgeIfZero"></a>

```java
public java.lang.Object getSendAgeIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

While set true, age value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the age field. It can be used alone or together with age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#send_age_if_zero StorageBucket#send_age_if_zero}

---

##### `sendDaysSinceCustomTimeIfZero`<sup>Optional</sup> <a name="sendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendDaysSinceCustomTimeIfZero"></a>

```java
public java.lang.Object getSendDaysSinceCustomTimeIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

While set true, days_since_custom_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_custom_time field. It can be used alone or together with days_since_custom_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#send_days_since_custom_time_if_zero StorageBucket#send_days_since_custom_time_if_zero}

---

##### `sendDaysSinceNoncurrentTimeIfZero`<sup>Optional</sup> <a name="sendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendDaysSinceNoncurrentTimeIfZero"></a>

```java
public java.lang.Object getSendDaysSinceNoncurrentTimeIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_noncurrent_time field. It can be used alone or together with days_since_noncurrent_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#send_days_since_noncurrent_time_if_zero StorageBucket#send_days_since_noncurrent_time_if_zero}

---

##### `sendNumNewerVersionsIfZero`<sup>Optional</sup> <a name="sendNumNewerVersionsIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendNumNewerVersionsIfZero"></a>

```java
public java.lang.Object getSendNumNewerVersionsIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

While set true, num_newer_versions value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the num_newer_versions field. It can be used alone or together with num_newer_versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#send_num_newer_versions_if_zero StorageBucket#send_num_newer_versions_if_zero}

---

##### `withState`<sup>Optional</sup> <a name="withState" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.withState"></a>

```java
public java.lang.String getWithState();
```

- *Type:* java.lang.String

Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#with_state StorageBucket#with_state}

---

### StorageBucketLogging <a name="StorageBucketLogging" id="@cdktf/provider-google.storageBucket.StorageBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketLogging;

StorageBucketLogging.builder()
    .logBucket(java.lang.String)
//  .logObjectPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logBucket">logBucket</a></code> | <code>java.lang.String</code> | The bucket that will receive log objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logObjectPrefix">logObjectPrefix</a></code> | <code>java.lang.String</code> | The object prefix for log objects. |

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logBucket"></a>

```java
public java.lang.String getLogBucket();
```

- *Type:* java.lang.String

The bucket that will receive log objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#log_bucket StorageBucket#log_bucket}

---

##### `logObjectPrefix`<sup>Optional</sup> <a name="logObjectPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logObjectPrefix"></a>

```java
public java.lang.String getLogObjectPrefix();
```

- *Type:* java.lang.String

The object prefix for log objects.

If it's not provided, by default Google Cloud Storage sets this to this bucket's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#log_object_prefix StorageBucket#log_object_prefix}

---

### StorageBucketRetentionPolicy <a name="StorageBucketRetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketRetentionPolicy;

StorageBucketRetentionPolicy.builder()
    .retentionPeriod(java.lang.Number)
//  .isLocked(java.lang.Boolean)
//  .isLocked(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.isLocked">isLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy. |

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.retentionPeriod"></a>

```java
public java.lang.Number getRetentionPeriod();
```

- *Type:* java.lang.Number

The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived.

The value must be less than 3,155,760,000 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#retention_period StorageBucket#retention_period}

---

##### `isLocked`<sup>Optional</sup> <a name="isLocked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.isLocked"></a>

```java
public java.lang.Object getIsLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.

Caution: Locking a bucket is an irreversible action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#is_locked StorageBucket#is_locked}

---

### StorageBucketSoftDeletePolicy <a name="StorageBucketSoftDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketSoftDeletePolicy;

StorageBucketSoftDeletePolicy.builder()
//  .retentionDurationSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy.property.retentionDurationSeconds">retentionDurationSeconds</a></code> | <code>java.lang.Number</code> | The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. |

---

##### `retentionDurationSeconds`<sup>Optional</sup> <a name="retentionDurationSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy.property.retentionDurationSeconds"></a>

```java
public java.lang.Number getRetentionDurationSeconds();
```

- *Type:* java.lang.Number

The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted.

Default value is 604800.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#retention_duration_seconds StorageBucket#retention_duration_seconds}

---

### StorageBucketTimeouts <a name="StorageBucketTimeouts" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketTimeouts;

StorageBucketTimeouts.builder()
//  .create(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#create StorageBucket#create}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#read StorageBucket#read}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#update StorageBucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#create StorageBucket#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#read StorageBucket#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#update StorageBucket#update}.

---

### StorageBucketVersioning <a name="StorageBucketVersioning" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketVersioning;

StorageBucketVersioning.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | While set to true, versioning is fully enabled for this bucket. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

While set to true, versioning is fully enabled for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#enabled StorageBucket#enabled}

---

### StorageBucketWebsite <a name="StorageBucketWebsite" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketWebsite;

StorageBucketWebsite.builder()
//  .mainPageSuffix(java.lang.String)
//  .notFoundPage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.mainPageSuffix">mainPageSuffix</a></code> | <code>java.lang.String</code> | Behaves as the bucket's directory index where missing objects are treated as potential directories. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.notFoundPage">notFoundPage</a></code> | <code>java.lang.String</code> | The custom object to return when a requested resource is not found. |

---

##### `mainPageSuffix`<sup>Optional</sup> <a name="mainPageSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.mainPageSuffix"></a>

```java
public java.lang.String getMainPageSuffix();
```

- *Type:* java.lang.String

Behaves as the bucket's directory index where missing objects are treated as potential directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#main_page_suffix StorageBucket#main_page_suffix}

---

##### `notFoundPage`<sup>Optional</sup> <a name="notFoundPage" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.notFoundPage"></a>

```java
public java.lang.String getNotFoundPage();
```

- *Type:* java.lang.String

The custom object to return when a requested resource is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/storage_bucket#not_found_page StorageBucket#not_found_page}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBucketAutoclassOutputReference <a name="StorageBucketAutoclassOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketAutoclassOutputReference;

new StorageBucketAutoclassOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resetTerminalStorageClass">resetTerminalStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTerminalStorageClass` <a name="resetTerminalStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resetTerminalStorageClass"></a>

```java
public void resetTerminalStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClassInput">terminalStorageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClass">terminalStorageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminalStorageClassInput`<sup>Optional</sup> <a name="terminalStorageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClassInput"></a>

```java
public java.lang.String getTerminalStorageClassInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminalStorageClass`<sup>Required</sup> <a name="terminalStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClass"></a>

```java
public java.lang.String getTerminalStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.internalValue"></a>

```java
public StorageBucketAutoclass getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---


### StorageBucketCorsList <a name="StorageBucketCorsList" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketCorsList;

new StorageBucketCorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.get"></a>

```java
public StorageBucketCorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>>

---


### StorageBucketCorsOutputReference <a name="StorageBucketCorsOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketCorsOutputReference;

new StorageBucketCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMaxAgeSeconds">resetMaxAgeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetResponseHeader">resetResponseHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxAgeSeconds` <a name="resetMaxAgeSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMaxAgeSeconds"></a>

```java
public void resetMaxAgeSeconds()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetOrigin"></a>

```java
public void resetOrigin()
```

##### `resetResponseHeader` <a name="resetResponseHeader" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetResponseHeader"></a>

```java
public void resetResponseHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSecondsInput">maxAgeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.originInput">originInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeaderInput">responseHeaderInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.origin">origin</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeader">responseHeader</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxAgeSecondsInput`<sup>Optional</sup> <a name="maxAgeSecondsInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSecondsInput"></a>

```java
public java.lang.Number getMaxAgeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.methodInput"></a>

```java
public java.util.List<java.lang.String> getMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.originInput"></a>

```java
public java.util.List<java.lang.String> getOriginInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseHeaderInput`<sup>Optional</sup> <a name="responseHeaderInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeaderInput"></a>

```java
public java.util.List<java.lang.String> getResponseHeaderInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeSeconds`<sup>Required</sup> <a name="maxAgeSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSeconds"></a>

```java
public java.lang.Number getMaxAgeSeconds();
```

- *Type:* java.lang.Number

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.origin"></a>

```java
public java.util.List<java.lang.String> getOrigin();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseHeader`<sup>Required</sup> <a name="responseHeader" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeader"></a>

```java
public java.util.List<java.lang.String> getResponseHeader();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>

---


### StorageBucketCustomPlacementConfigOutputReference <a name="StorageBucketCustomPlacementConfigOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketCustomPlacementConfigOutputReference;

new StorageBucketCustomPlacementConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput">dataLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocations">dataLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataLocationsInput`<sup>Optional</sup> <a name="dataLocationsInput" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput"></a>

```java
public java.util.List<java.lang.String> getDataLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataLocations`<sup>Required</sup> <a name="dataLocations" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocations"></a>

```java
public java.util.List<java.lang.String> getDataLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.internalValue"></a>

```java
public StorageBucketCustomPlacementConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---


### StorageBucketEncryptionOutputReference <a name="StorageBucketEncryptionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketEncryptionOutputReference;

new StorageBucketEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput">defaultKmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyName">defaultKmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultKmsKeyNameInput`<sup>Optional</sup> <a name="defaultKmsKeyNameInput" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput"></a>

```java
public java.lang.String getDefaultKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `defaultKmsKeyName`<sup>Required</sup> <a name="defaultKmsKeyName" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyName"></a>

```java
public java.lang.String getDefaultKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.internalValue"></a>

```java
public StorageBucketEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---


### StorageBucketHierarchicalNamespaceOutputReference <a name="StorageBucketHierarchicalNamespaceOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketHierarchicalNamespaceOutputReference;

new StorageBucketHierarchicalNamespaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.internalValue"></a>

```java
public StorageBucketHierarchicalNamespace getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a>

---


### StorageBucketLifecycleRuleActionOutputReference <a name="StorageBucketLifecycleRuleActionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketLifecycleRuleActionOutputReference;

new StorageBucketLifecycleRuleActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resetStorageClass"></a>

```java
public void resetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.internalValue"></a>

```java
public StorageBucketLifecycleRuleAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---


### StorageBucketLifecycleRuleConditionOutputReference <a name="StorageBucketLifecycleRuleConditionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketLifecycleRuleConditionOutputReference;

new StorageBucketLifecycleRuleConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetAge">resetAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore">resetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore">resetCustomTimeBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime">resetDaysSinceCustomTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime">resetDaysSinceNoncurrentTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix">resetMatchesPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass">resetMatchesStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix">resetMatchesSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore">resetNoncurrentTimeBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions">resetNumNewerVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendAgeIfZero">resetSendAgeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceCustomTimeIfZero">resetSendDaysSinceCustomTimeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceNoncurrentTimeIfZero">resetSendDaysSinceNoncurrentTimeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendNumNewerVersionsIfZero">resetSendNumNewerVersionsIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetWithState">resetWithState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAge` <a name="resetAge" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetAge"></a>

```java
public void resetAge()
```

##### `resetCreatedBefore` <a name="resetCreatedBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore"></a>

```java
public void resetCreatedBefore()
```

##### `resetCustomTimeBefore` <a name="resetCustomTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore"></a>

```java
public void resetCustomTimeBefore()
```

##### `resetDaysSinceCustomTime` <a name="resetDaysSinceCustomTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime"></a>

```java
public void resetDaysSinceCustomTime()
```

##### `resetDaysSinceNoncurrentTime` <a name="resetDaysSinceNoncurrentTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime"></a>

```java
public void resetDaysSinceNoncurrentTime()
```

##### `resetMatchesPrefix` <a name="resetMatchesPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix"></a>

```java
public void resetMatchesPrefix()
```

##### `resetMatchesStorageClass` <a name="resetMatchesStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass"></a>

```java
public void resetMatchesStorageClass()
```

##### `resetMatchesSuffix` <a name="resetMatchesSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix"></a>

```java
public void resetMatchesSuffix()
```

##### `resetNoncurrentTimeBefore` <a name="resetNoncurrentTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore"></a>

```java
public void resetNoncurrentTimeBefore()
```

##### `resetNumNewerVersions` <a name="resetNumNewerVersions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions"></a>

```java
public void resetNumNewerVersions()
```

##### `resetSendAgeIfZero` <a name="resetSendAgeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendAgeIfZero"></a>

```java
public void resetSendAgeIfZero()
```

##### `resetSendDaysSinceCustomTimeIfZero` <a name="resetSendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceCustomTimeIfZero"></a>

```java
public void resetSendDaysSinceCustomTimeIfZero()
```

##### `resetSendDaysSinceNoncurrentTimeIfZero` <a name="resetSendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceNoncurrentTimeIfZero"></a>

```java
public void resetSendDaysSinceNoncurrentTimeIfZero()
```

##### `resetSendNumNewerVersionsIfZero` <a name="resetSendNumNewerVersionsIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendNumNewerVersionsIfZero"></a>

```java
public void resetSendNumNewerVersionsIfZero()
```

##### `resetWithState` <a name="resetWithState" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetWithState"></a>

```java
public void resetWithState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.ageInput">ageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput">createdBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput">customTimeBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput">daysSinceCustomTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput">daysSinceNoncurrentTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput">matchesPrefixInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput">matchesStorageClassInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput">matchesSuffixInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput">noncurrentTimeBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput">numNewerVersionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZeroInput">sendAgeIfZeroInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZeroInput">sendDaysSinceCustomTimeIfZeroInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZeroInput">sendDaysSinceNoncurrentTimeIfZeroInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZeroInput">sendNumNewerVersionsIfZeroInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withStateInput">withStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.age">age</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore">customTimeBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime">daysSinceCustomTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime">daysSinceNoncurrentTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix">matchesPrefix</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass">matchesStorageClass</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix">matchesSuffix</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore">noncurrentTimeBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions">numNewerVersions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero">sendAgeIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero">sendDaysSinceCustomTimeIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero">sendDaysSinceNoncurrentTimeIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero">sendNumNewerVersionsIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withState">withState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ageInput`<sup>Optional</sup> <a name="ageInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.ageInput"></a>

```java
public java.lang.Number getAgeInput();
```

- *Type:* java.lang.Number

---

##### `createdBeforeInput`<sup>Optional</sup> <a name="createdBeforeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput"></a>

```java
public java.lang.String getCreatedBeforeInput();
```

- *Type:* java.lang.String

---

##### `customTimeBeforeInput`<sup>Optional</sup> <a name="customTimeBeforeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput"></a>

```java
public java.lang.String getCustomTimeBeforeInput();
```

- *Type:* java.lang.String

---

##### `daysSinceCustomTimeInput`<sup>Optional</sup> <a name="daysSinceCustomTimeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput"></a>

```java
public java.lang.Number getDaysSinceCustomTimeInput();
```

- *Type:* java.lang.Number

---

##### `daysSinceNoncurrentTimeInput`<sup>Optional</sup> <a name="daysSinceNoncurrentTimeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput"></a>

```java
public java.lang.Number getDaysSinceNoncurrentTimeInput();
```

- *Type:* java.lang.Number

---

##### `matchesPrefixInput`<sup>Optional</sup> <a name="matchesPrefixInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput"></a>

```java
public java.util.List<java.lang.String> getMatchesPrefixInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchesStorageClassInput`<sup>Optional</sup> <a name="matchesStorageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput"></a>

```java
public java.util.List<java.lang.String> getMatchesStorageClassInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchesSuffixInput`<sup>Optional</sup> <a name="matchesSuffixInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput"></a>

```java
public java.util.List<java.lang.String> getMatchesSuffixInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `noncurrentTimeBeforeInput`<sup>Optional</sup> <a name="noncurrentTimeBeforeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput"></a>

```java
public java.lang.String getNoncurrentTimeBeforeInput();
```

- *Type:* java.lang.String

---

##### `numNewerVersionsInput`<sup>Optional</sup> <a name="numNewerVersionsInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput"></a>

```java
public java.lang.Number getNumNewerVersionsInput();
```

- *Type:* java.lang.Number

---

##### `sendAgeIfZeroInput`<sup>Optional</sup> <a name="sendAgeIfZeroInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZeroInput"></a>

```java
public java.lang.Object getSendAgeIfZeroInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendDaysSinceCustomTimeIfZeroInput`<sup>Optional</sup> <a name="sendDaysSinceCustomTimeIfZeroInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZeroInput"></a>

```java
public java.lang.Object getSendDaysSinceCustomTimeIfZeroInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendDaysSinceNoncurrentTimeIfZeroInput`<sup>Optional</sup> <a name="sendDaysSinceNoncurrentTimeIfZeroInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZeroInput"></a>

```java
public java.lang.Object getSendDaysSinceNoncurrentTimeIfZeroInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendNumNewerVersionsIfZeroInput`<sup>Optional</sup> <a name="sendNumNewerVersionsIfZeroInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZeroInput"></a>

```java
public java.lang.Object getSendNumNewerVersionsIfZeroInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `withStateInput`<sup>Optional</sup> <a name="withStateInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withStateInput"></a>

```java
public java.lang.String getWithStateInput();
```

- *Type:* java.lang.String

---

##### `age`<sup>Required</sup> <a name="age" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.age"></a>

```java
public java.lang.Number getAge();
```

- *Type:* java.lang.Number

---

##### `createdBefore`<sup>Required</sup> <a name="createdBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

---

##### `customTimeBefore`<sup>Required</sup> <a name="customTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore"></a>

```java
public java.lang.String getCustomTimeBefore();
```

- *Type:* java.lang.String

---

##### `daysSinceCustomTime`<sup>Required</sup> <a name="daysSinceCustomTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime"></a>

```java
public java.lang.Number getDaysSinceCustomTime();
```

- *Type:* java.lang.Number

---

##### `daysSinceNoncurrentTime`<sup>Required</sup> <a name="daysSinceNoncurrentTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime"></a>

```java
public java.lang.Number getDaysSinceNoncurrentTime();
```

- *Type:* java.lang.Number

---

##### `matchesPrefix`<sup>Required</sup> <a name="matchesPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix"></a>

```java
public java.util.List<java.lang.String> getMatchesPrefix();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchesStorageClass`<sup>Required</sup> <a name="matchesStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass"></a>

```java
public java.util.List<java.lang.String> getMatchesStorageClass();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchesSuffix`<sup>Required</sup> <a name="matchesSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix"></a>

```java
public java.util.List<java.lang.String> getMatchesSuffix();
```

- *Type:* java.util.List<java.lang.String>

---

##### `noncurrentTimeBefore`<sup>Required</sup> <a name="noncurrentTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore"></a>

```java
public java.lang.String getNoncurrentTimeBefore();
```

- *Type:* java.lang.String

---

##### `numNewerVersions`<sup>Required</sup> <a name="numNewerVersions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions"></a>

```java
public java.lang.Number getNumNewerVersions();
```

- *Type:* java.lang.Number

---

##### `sendAgeIfZero`<sup>Required</sup> <a name="sendAgeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero"></a>

```java
public java.lang.Object getSendAgeIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendDaysSinceCustomTimeIfZero`<sup>Required</sup> <a name="sendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero"></a>

```java
public java.lang.Object getSendDaysSinceCustomTimeIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendDaysSinceNoncurrentTimeIfZero`<sup>Required</sup> <a name="sendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero"></a>

```java
public java.lang.Object getSendDaysSinceNoncurrentTimeIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendNumNewerVersionsIfZero`<sup>Required</sup> <a name="sendNumNewerVersionsIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero"></a>

```java
public java.lang.Object getSendNumNewerVersionsIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `withState`<sup>Required</sup> <a name="withState" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withState"></a>

```java
public java.lang.String getWithState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.internalValue"></a>

```java
public StorageBucketLifecycleRuleCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---


### StorageBucketLifecycleRuleList <a name="StorageBucketLifecycleRuleList" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketLifecycleRuleList;

new StorageBucketLifecycleRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get"></a>

```java
public StorageBucketLifecycleRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>>

---


### StorageBucketLifecycleRuleOutputReference <a name="StorageBucketLifecycleRuleOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketLifecycleRuleOutputReference;

new StorageBucketLifecycleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition">putCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction"></a>

```java
public void putAction(StorageBucketLifecycleRuleAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition"></a>

```java
public void putCondition(StorageBucketLifecycleRuleCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference">StorageBucketLifecycleRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference">StorageBucketLifecycleRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.action"></a>

```java
public StorageBucketLifecycleRuleActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference">StorageBucketLifecycleRuleActionOutputReference</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.condition"></a>

```java
public StorageBucketLifecycleRuleConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference">StorageBucketLifecycleRuleConditionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.actionInput"></a>

```java
public StorageBucketLifecycleRuleAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.conditionInput"></a>

```java
public StorageBucketLifecycleRuleCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>

---


### StorageBucketLoggingOutputReference <a name="StorageBucketLoggingOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketLoggingOutputReference;

new StorageBucketLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resetLogObjectPrefix">resetLogObjectPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogObjectPrefix` <a name="resetLogObjectPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resetLogObjectPrefix"></a>

```java
public void resetLogObjectPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucketInput">logBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefixInput">logObjectPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucket">logBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefix">logObjectPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logBucketInput`<sup>Optional</sup> <a name="logBucketInput" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucketInput"></a>

```java
public java.lang.String getLogBucketInput();
```

- *Type:* java.lang.String

---

##### `logObjectPrefixInput`<sup>Optional</sup> <a name="logObjectPrefixInput" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefixInput"></a>

```java
public java.lang.String getLogObjectPrefixInput();
```

- *Type:* java.lang.String

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucket"></a>

```java
public java.lang.String getLogBucket();
```

- *Type:* java.lang.String

---

##### `logObjectPrefix`<sup>Required</sup> <a name="logObjectPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefix"></a>

```java
public java.lang.String getLogObjectPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.internalValue"></a>

```java
public StorageBucketLogging getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---


### StorageBucketRetentionPolicyOutputReference <a name="StorageBucketRetentionPolicyOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketRetentionPolicyOutputReference;

new StorageBucketRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resetIsLocked">resetIsLocked</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsLocked` <a name="resetIsLocked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resetIsLocked"></a>

```java
public void resetIsLocked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLockedInput">isLockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLocked">isLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isLockedInput`<sup>Optional</sup> <a name="isLockedInput" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLockedInput"></a>

```java
public java.lang.Object getIsLockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput"></a>

```java
public java.lang.Number getRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `isLocked`<sup>Required</sup> <a name="isLocked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLocked"></a>

```java
public java.lang.Object getIsLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriod"></a>

```java
public java.lang.Number getRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.internalValue"></a>

```java
public StorageBucketRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---


### StorageBucketSoftDeletePolicyOutputReference <a name="StorageBucketSoftDeletePolicyOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketSoftDeletePolicyOutputReference;

new StorageBucketSoftDeletePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resetRetentionDurationSeconds">resetRetentionDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionDurationSeconds` <a name="resetRetentionDurationSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resetRetentionDurationSeconds"></a>

```java
public void resetRetentionDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.effectiveTime">effectiveTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSecondsInput">retentionDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds">retentionDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.effectiveTime"></a>

```java
public java.lang.String getEffectiveTime();
```

- *Type:* java.lang.String

---

##### `retentionDurationSecondsInput`<sup>Optional</sup> <a name="retentionDurationSecondsInput" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSecondsInput"></a>

```java
public java.lang.Number getRetentionDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `retentionDurationSeconds`<sup>Required</sup> <a name="retentionDurationSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds"></a>

```java
public java.lang.Number getRetentionDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.internalValue"></a>

```java
public StorageBucketSoftDeletePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a>

---


### StorageBucketTimeoutsOutputReference <a name="StorageBucketTimeoutsOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketTimeoutsOutputReference;

new StorageBucketTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

---


### StorageBucketVersioningOutputReference <a name="StorageBucketVersioningOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketVersioningOutputReference;

new StorageBucketVersioningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.internalValue"></a>

```java
public StorageBucketVersioning getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---


### StorageBucketWebsiteOutputReference <a name="StorageBucketWebsiteOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket.StorageBucketWebsiteOutputReference;

new StorageBucketWebsiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetMainPageSuffix">resetMainPageSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetNotFoundPage">resetNotFoundPage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMainPageSuffix` <a name="resetMainPageSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetMainPageSuffix"></a>

```java
public void resetMainPageSuffix()
```

##### `resetNotFoundPage` <a name="resetNotFoundPage" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetNotFoundPage"></a>

```java
public void resetNotFoundPage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffixInput">mainPageSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPageInput">notFoundPageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffix">mainPageSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPage">notFoundPage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mainPageSuffixInput`<sup>Optional</sup> <a name="mainPageSuffixInput" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffixInput"></a>

```java
public java.lang.String getMainPageSuffixInput();
```

- *Type:* java.lang.String

---

##### `notFoundPageInput`<sup>Optional</sup> <a name="notFoundPageInput" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPageInput"></a>

```java
public java.lang.String getNotFoundPageInput();
```

- *Type:* java.lang.String

---

##### `mainPageSuffix`<sup>Required</sup> <a name="mainPageSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffix"></a>

```java
public java.lang.String getMainPageSuffix();
```

- *Type:* java.lang.String

---

##### `notFoundPage`<sup>Required</sup> <a name="notFoundPage" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPage"></a>

```java
public java.lang.String getNotFoundPage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.internalValue"></a>

```java
public StorageBucketWebsite getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---



